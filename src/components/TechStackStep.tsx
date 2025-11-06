import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft, Plus, X, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { TECH_CATEGORIES } from './data/tech-categories';
import { getAppLogo } from './utils/app-logos';
import { StepLogo } from './StepLogo';

interface TechStackStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
  onUpdate?: (data: Partial<AssessmentData>) => void;
}

// Helper function to arrange apps in column-first order for grid display
function arrangeByColumn(apps: string[], columns: number): string[] {
  const rows = Math.ceil(apps.length / columns);
  const arranged: string[] = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const index = col * rows + row;
      if (index < apps.length) {
        arranged.push(apps[index]);
      }
    }
  }
  
  return arranged;
}

export function TechStackStep({ data, onNext, onBack, onUpdate }: TechStackStepProps) {
  const [selectedApps, setSelectedApps] = useState(data.selectedApps);
  const [categoryInteractions, setCategoryInteractions] = useState(data.categoryInteractions || {});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [customAppDialog, setCustomAppDialog] = useState(false);
  const [customAppName, setCustomAppName] = useState('');
  const [customAppContext, setCustomAppContext] = useState('');
  const [error, setError] = useState('');
  const [attemptedContinue, setAttemptedContinue] = useState(false);

  // Initialize with ERP data if it exists
  useEffect(() => {
    if (data.erpSystems && data.erpSystems.length > 0) {
      const erpCategory = 'ERP / Financial Management';
      setSelectedApps(prev => ({
        ...prev,
        [erpCategory]: data.erpSystems.map(erp => ({ name: erp }))
      }));
      setCategoryInteractions(prev => ({
        ...prev,
        [erpCategory]: true
      }));
    }
  }, []);

  const handleToggleApp = (category: string, appName: string) => {
    const categoryApps = selectedApps[category] || [];
    const exists = categoryApps.find(app => app.name === appName);
    
    if (exists) {
      // Remove app
      const newSelectedApps = {
        ...selectedApps,
        [category]: categoryApps.filter(app => app.name !== appName)
      };
      setSelectedApps(newSelectedApps);
      // Real-time update to parent
      onUpdate?.({ selectedApps: newSelectedApps });
    } else {
      // Add app directly (no context dialog)
      const categoryApps = selectedApps[category] || [];
      const newSelectedApps = {
        ...selectedApps,
        [category]: [...categoryApps, { name: appName }]
      };
      setSelectedApps(newSelectedApps);
      
      // Real-time update to parent
      onUpdate?.({ selectedApps: newSelectedApps });
      
      // Mark category as interacted
      const newCategoryInteractions = {
        ...categoryInteractions,
        [category]: true
      };
      setCategoryInteractions(newCategoryInteractions);
      onUpdate?.({ categoryInteractions: newCategoryInteractions });
      
      // Clear search after app selection
      setSearchQuery('');
    }
  };

  const handleAddCustomApp = () => {
    if (!customAppName.trim() || !activeCategory) return;
    
    const trimmedContext = customAppContext.trim();
    
    const categoryApps = selectedApps[activeCategory] || [];
    const newSelectedApps = {
      ...selectedApps,
      [activeCategory]: [
        ...categoryApps,
        {
          name: customAppName.trim(),
          isCustom: true,
          ...(trimmedContext && { context: trimmedContext })
        }
      ]
    };
    setSelectedApps(newSelectedApps);
    
    // Real-time update to parent
    onUpdate?.({ selectedApps: newSelectedApps });
    
    // Mark category as interacted
    const newCategoryInteractions = {
      ...categoryInteractions,
      [activeCategory]: true
    };
    setCategoryInteractions(newCategoryInteractions);
    onUpdate?.({ categoryInteractions: newCategoryInteractions });
    
    setCustomAppName('');
    setCustomAppContext('');
    setCustomAppDialog(false);
  };

  const handleRemoveApp = (category: string, appName: string) => {
    const categoryApps = selectedApps[category] || [];
    const newSelectedApps = {
      ...selectedApps,
      [category]: categoryApps.filter(app => app.name !== appName)
    };
    setSelectedApps(newSelectedApps);
    // Real-time update to parent
    onUpdate?.({ selectedApps: newSelectedApps });
  };

  const handleToggleNoApps = (category: string, checked: boolean) => {
    setCategoryInteractions(prev => ({
      ...prev,
      [category]: checked
    }));
    
    // If checked, clear any selected apps for this category
    if (checked) {
      setSelectedApps(prev => ({
        ...prev,
        [category]: []
      }));
    }
  };

  const totalSelectedApps = Object.values(selectedApps).reduce(
    (sum, apps) => sum + apps.length,
    0
  );

  const handleContinue = () => {
    setAttemptedContinue(true);
    
    // Check if all categories have been interacted with
    const uninteractedCategories = TECH_CATEGORIES.filter(cat => {
      const hasApps = (selectedApps[cat.name] || []).length > 0;
      const isMarkedNoApps = categoryInteractions[cat.name];
      return !hasApps && !isMarkedNoApps;
    });

    if (uninteractedCategories.length > 0) {
      setError(`Please review all categories. ${uninteractedCategories.length} category/categories still need attention.`);
      // Auto-expand first uninteracted category
      if (uninteractedCategories[0]) {
        setActiveCategory(uninteractedCategories[0].name);
      }
      return;
    }

    onNext({ selectedApps, categoryInteractions });
  };

  // Filter categories and auto-expand matching ones
  const filteredCategories = TECH_CATEGORIES.map(cat => {
    const matchingApps = cat.apps.filter(app =>
      app.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const categoryNameMatches = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return {
      ...cat,
      matchingApps,
      shouldShow: categoryNameMatches || matchingApps.length > 0
    };
  }).filter(cat => cat.shouldShow);

  // Auto-expand categories with matching apps when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const matchingCategory = filteredCategories.find(cat => cat.matchingApps.length > 0);
      if (matchingCategory && activeCategory !== matchingCategory.name) {
        setActiveCategory(matchingCategory.name);
      }
    }
  }, [searchQuery]);

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Your Technology Stack</h2>
          <p className="text-slate-600">
            Select the applications you currently use. Please review all categories - select apps or mark "We don't use any apps for this".
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search categories or apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Selected Apps Summary */}
        {totalSelectedApps > 0 && (
          <div className="mb-6 p-4 bg-[#1C1C1C] rounded-lg">
            <p className="text-sm text-white">
              <span className="font-extrabold">{totalSelectedApps}</span> apps selected across{' '}
              <span className="font-extrabold">{Object.keys(selectedApps).filter(cat => selectedApps[cat].length > 0).length}</span> categories
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-900">{error}</p>
          </div>
        )}

        {/* Categories - removed max-height to fix scrolling issue */}
        <div className="space-y-4 pr-2">
          {filteredCategories.map((category) => {
            const categoryApps = selectedApps[category.name] || [];
            const selectedCount = categoryApps.length;
            const noAppsChecked = categoryInteractions[category.name] && selectedCount === 0;
            const hasInteraction = categoryInteractions[category.name] || selectedCount > 0;
            const showNoAppsCheckbox = selectedCount === 0;

            // Arrange apps by column
            const appsToShow = searchQuery.trim() && category.matchingApps.length > 0 
              ? category.matchingApps 
              : category.apps;
            const arrangedApps = arrangeByColumn(appsToShow, 3);

            // Determine border color
            let borderColor = 'border-slate-200'; // Default grey
            if (selectedCount > 0) {
              borderColor = 'border-green-500'; // Green when has selections
            } else if (attemptedContinue && !hasInteraction) {
              borderColor = 'border-red-500'; // Red when attempted continue without interaction
            }

            return (
              <div key={category.name} className={`border-2 rounded-lg overflow-hidden ${borderColor}`}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                  className="w-full p-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{category.icon}</span>
                    <div className="text-left flex-1">
                      <p className="text-slate-900">{category.name}</p>
                      <p className="text-sm text-slate-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedCount > 0 && (
                      <Badge variant="secondary" className="bg-[rgba(28,28,28,0.1)] text-[#1C1C1C]">
                        {selectedCount} selected
                      </Badge>
                    )}
                    {showNoAppsCheckbox && (
                      <div className="flex items-center gap-2 ml-4">
                        <Checkbox
                          id={`no-apps-${category.name}`}
                          checked={noAppsChecked}
                          onCheckedChange={(checked) => {
                            handleToggleNoApps(category.name, checked as boolean);
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <Label 
                          htmlFor={`no-apps-${category.name}`}
                          className="text-sm text-slate-600 cursor-pointer whitespace-nowrap"
                          onClick={(e) => e.stopPropagation()}
                        >
                          We don't use any apps for this
                        </Label>
                      </div>
                    )}
                  </div>
                </button>

                {activeCategory === category.name && (
                  <div className="p-4 bg-white border-t border-slate-200">
                    {/* Selected Apps */}
                    {categoryApps.length > 0 && (
                      <div className="mb-4">
                        <Label className="text-slate-700 mb-2 block">Selected Apps</Label>
                        <div className="flex flex-wrap gap-2">
                          {categoryApps.map((app) => (
                            <div
                              key={app.name}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(28,28,28,0.1)] text-[#1C1C1C] rounded-full"
                            >
                              <img src={getAppLogo(app.name)} alt="" className="h-4 max-w-full rounded object-contain" />
                              <span className="text-sm">{app.name}</span>
                              <button
                                type="button"
                                onClick={() => handleRemoveApp(category.name, app.name)}
                                className="hover:bg-[rgba(28,28,28,0.2)] rounded-full p-0.5"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Available Apps */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {arrangedApps.map((app) => {
                        const isSelected = categoryApps.some(a => a.name === app);
                        const isHighlighted = searchQuery.trim() && app.toLowerCase().includes(searchQuery.toLowerCase());
                        
                        return (
                          <button
                            key={app}
                            type="button"
                            onClick={() => handleToggleApp(category.name, app)}
                            disabled={isSelected}
                            className={`p-3 border rounded-lg text-left transition-all text-sm flex items-center gap-2 ${
                              isSelected
                                ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                                : isHighlighted
                                ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)] ring-2 ring-[rgba(28,28,28,0.1)]'
                                : 'border-slate-200 hover:border-[#1C1C1C] hover:bg-[rgba(28,28,28,0.05)]'
                            }`}
                          >
                            <img src={getAppLogo(app)} alt="" className="h-6 max-w-full rounded flex-shrink-0 object-contain" />
                            <span className="truncate">{app}</span>
                          </button>
                        );
                      })}
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setCustomAppDialog(true)}
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Custom App
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <p className="text-slate-600 text-center py-8">No categories or apps match your search</p>
        )}

        <div className="flex gap-3 pt-6 mt-6 border-t border-slate-200">
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-[8px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleContinue}
            className="flex-1 flex items-center justify-center gap-[8px]"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Custom App Dialog */}
      <Dialog open={customAppDialog} onOpenChange={setCustomAppDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Custom App</DialogTitle>
            <DialogDescription>
              Enter the app name and optionally provide context about how it's used.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="customApp">App Name *</Label>
              <Input
                id="customApp"
                value={customAppName}
                onChange={(e) => setCustomAppName(e.target.value)}
                placeholder="Enter app name"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="customAppContext">
                Additional Context (Optional)
              </Label>
              <Textarea
                id="customAppContext"
                value={customAppContext}
                onChange={(e) => setCustomAppContext(e.target.value)}
                placeholder="e.g., Used for warehouse management; Legacy system being replaced"
                className="mt-1.5 min-h-[80px]"
              />
              <p className="text-xs text-slate-500 mt-1">
                This information will greatly improve the quality of your recommendations
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setCustomAppDialog(false)} className="flex-1">
                Cancel
              </Button>
              <Button 
                onClick={handleAddCustomApp} 
                disabled={!customAppName.trim()}
                className="flex-1"
              >
                Add App
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
