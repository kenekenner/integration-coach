import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { getAppLogo } from './utils/app-logos';
import { Badge } from './ui/badge';
import { StepLogo } from './StepLogo';

interface AppContextStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
  onUpdate?: (data: Partial<AssessmentData>) => void;
}

export function AppContextStep({ data, onNext, onBack, onUpdate }: AppContextStepProps) {
  const [selectedApps, setSelectedApps] = useState(data.selectedApps);
  const [contextDialog, setContextDialog] = useState<{ category: string; app: string } | null>(null);
  const [contextText, setContextText] = useState('');
  const [initialContextText, setInitialContextText] = useState('');

  // Get all selected apps grouped by category
  const allApps = Object.entries(selectedApps)
    .filter(([_, apps]) => apps.length > 0)
    .map(([category, apps]) => ({ category, apps }));

  const totalApps = allApps.reduce((sum, { apps }) => sum + apps.length, 0);
  const appsWithContext = allApps.reduce((sum, { apps }) => 
    sum + apps.filter(app => app.context).length, 0
  );

  const handleSaveContext = () => {
    if (!contextDialog) return;
    
    const { category, app } = contextDialog;
    const trimmedContext = contextText.trim();
    
    const categoryApps = selectedApps[category] || [];
    const updatedApps = categoryApps.map(a =>
      a.name === app
        ? { ...a, context: trimmedContext || undefined }
        : a
    );
    const newSelectedApps = {
      ...selectedApps,
      [category]: updatedApps
    };
    
    setSelectedApps(newSelectedApps);
    
    // Real-time update to parent for constellation
    onUpdate?.({ selectedApps: newSelectedApps });
    
    setContextText('');
    setContextDialog(null);
  };

  const handleOpenContextDialog = (category: string, appName: string) => {
    const app = selectedApps[category]?.find(a => a.name === appName);
    const existingContext = app?.context || '';
    setContextText(existingContext);
    setInitialContextText(existingContext);
    setContextDialog({ category, app: appName });
  };

  const handleContinue = () => {
    onNext({ selectedApps });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Add Context to Your Apps (Optional)</h2>
          <p className="text-slate-600">
            Help us provide better recommendations by adding context about how you use specific apps. 
            This is optional but will significantly improve the quality of our analysis.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-6 p-4 bg-[rgba(28,28,28,0.05)] rounded-lg border border-[rgba(0,0,0,0.05)]">
          <p className="text-sm text-[#1C1C1C]">
            <span className="font-medium">{totalApps}</span> apps selected
          </p>
        </div>

        {/* Apps by category */}
        <div className="space-y-6">
          {allApps.map(({ category, apps }) => (
            <div key={category} className="border border-slate-200 rounded-lg p-4">
              <h3 className="text-slate-900 mb-3">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {apps.map((app) => (
                  <button
                    key={app.name}
                    type="button"
                    onClick={() => handleOpenContextDialog(category, app.name)}
                    className={`p-3 border-2 rounded-lg text-left transition-all hover:border-[#1C1C1C] hover:shadow-md group ${
                      app.context 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <img 
                        src={getAppLogo(app.name)} 
                        alt="" 
                        className="h-6 max-w-full rounded flex-shrink-0 object-contain" 
                      />
                      {app.context && (
                        <Badge variant="secondary" className="ml-auto bg-green-600 text-white text-xs px-1.5 py-0">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-900 mb-1 line-clamp-1">{app.name}</p>
                    <p className="text-xs text-[#1C1C1C] underline group-hover:text-[#1C1C1C]/80">
                      {app.context ? 'Edit context' : 'Add context'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {allApps.length === 0 && (
          <div className="text-center py-12 text-slate-600">
            <p>No apps selected. This shouldn't happen!</p>
          </div>
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

      {/* Context Dialog */}
      <Dialog open={!!contextDialog} onOpenChange={() => setContextDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Add Context for {contextDialog?.app}
            </DialogTitle>
            <DialogDescription>
              Provide information about how this app is currently used in your organization.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-[rgba(28,28,28,0.05)] rounded-lg border border-[rgba(0,0,0,0.05)]">
              <p className="text-sm text-[#1C1C1C] flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>This is optional, but will greatly improve the quality and personalization of our recommendations</span>
              </p>
            </div>
            <div>
              <Label htmlFor="context">
                How is this app used? Any specific details?
              </Label>
              <Textarea
                id="context"
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                placeholder="e.g., Used for both D2C and wholesale support; Legacy system being phased out; Handles subscription billing"
                className="mt-1.5 min-h-[100px]"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setContextDialog(null)} 
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSaveContext} 
                disabled={!contextText.trim() && !initialContextText}
                className="flex-1"
              >
                Save Context
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
