import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { StepLogo } from './StepLogo';

interface ERPStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
}

const ERP_SYSTEMS = [
  'Oracle NetSuite',
  'SAP S/4HANA',
  'Microsoft Dynamics 365 Finance',
  'Acumatica',
  'Sage Intacct',
  'FinancialForce',
  'Workday Financials',
  'QuickBooks Enterprise',
  'Xero',
  'SAP Business One',
  'Epicor',
  'Infor CloudSuite',
];

export function ERPStep({ data, onNext, onBack }: ERPStepProps) {
  const [hasERP, setHasERP] = useState<boolean | null>(data.hasERP);
  const [selectedERPs, setSelectedERPs] = useState<string[]>(data.erpSystems || []);
  const [customERPs, setCustomERPs] = useState<string[]>([]);
  const [customERPInput, setCustomERPInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  // Initialize custom ERPs from existing data
  useEffect(() => {
    const existingCustom = data.erpSystems.filter(erp => !ERP_SYSTEMS.includes(erp));
    setCustomERPs(existingCustom);
  }, []);

  const filteredERPs = ERP_SYSTEMS.filter(erp =>
    erp.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    if (hasERP === null) {
      setError('Please select whether you have an ERP system');
      return;
    }

    if (hasERP && selectedERPs.length === 0 && customERPs.length === 0) {
      setError('Please select or enter at least one ERP system');
      return;
    }

    const allERPs = hasERP ? [...selectedERPs, ...customERPs] : [];
    
    onNext({
      hasERP,
      erpSystems: allERPs,
      // Also update selectedApps to include ERPs in the ERP category
      selectedApps: {
        ...data.selectedApps,
        'ERP / Financial Management': allERPs.map(erp => ({ name: erp }))
      }
    });
  };

  const handleERPToggle = (erp: string) => {
    setSelectedERPs(prev => {
      if (prev.includes(erp)) {
        return prev.filter(e => e !== erp);
      } else {
        return [...prev, erp];
      }
    });
    setError('');
  };

  const handleAddCustomERP = () => {
    const trimmed = customERPInput.trim();
    if (trimmed && !customERPs.includes(trimmed)) {
      setCustomERPs(prev => [...prev, trimmed]);
      setCustomERPInput('');
      setError('');
    }
  };

  const handleRemoveCustomERP = (erp: string) => {
    setCustomERPs(prev => prev.filter(e => e !== erp));
  };

  const allSelectedERPs = [...selectedERPs, ...customERPs];

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Your ERP System</h2>
          <p className="text-slate-600">
            Understanding your ERP is crucial for providing accurate integration recommendations.
          </p>
        </div>

        <div className="space-y-6">
          {/* Do you have an ERP */}
          <div>
            <Label className="text-slate-900 mb-3 block">
              Do you currently use an ERP system? *
            </Label>
            <RadioGroup
              value={hasERP === null ? undefined : hasERP ? 'yes' : 'no'}
              onValueChange={(value) => {
                const newHasERP = value === 'yes';
                setHasERP(newHasERP);
                if (!newHasERP) {
                  setSelectedERPs([]);
                  setCustomERPs([]);
                }
                setError('');
              }}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="erp-yes" />
                <Label htmlFor="erp-yes" className="cursor-pointer">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="erp-no" />
                <Label htmlFor="erp-no" className="cursor-pointer">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* ERP Selection */}
          {hasERP && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div>
                <Label className="text-slate-900 mb-3 block">
                  Which ERP system(s) do you use? * (Select all that apply)
                </Label>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search for your ERP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Selected ERPs */}
              {allSelectedERPs.length > 0 && (
                <div className="p-3 bg-[rgba(28,28,28,0.05)] rounded-lg border border-[rgba(0,0,0,0.05)]">
                  <p className="text-sm text-[#1C1C1C] mb-2">
                    <strong>{allSelectedERPs.length}</strong> ERP system{allSelectedERPs.length > 1 ? 's' : ''} selected
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {allSelectedERPs.map(erp => (
                      <div key={erp} className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1C] text-white rounded-full text-sm">
                        {erp}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available ERPs */}
              <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
                {filteredERPs.map((erp) => {
                  const isSelected = selectedERPs.includes(erp);
                  return (
                    <div
                      key={erp}
                      onClick={() => handleERPToggle(erp)}
                      className={`p-4 border-2 rounded-lg text-left transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => handleERPToggle(erp)}
                        className="mt-0.5"
                      />
                      <p className="text-slate-900">{erp}</p>
                    </div>
                  );
                })}
              </div>

              {filteredERPs.length === 0 && searchQuery && (
                <p className="text-slate-600 text-center py-4">
                  No matching ERP systems found
                </p>
              )}

              {/* Custom ERP Input */}
              <div className="pt-2">
                <Label htmlFor="customERP" className="text-slate-700 mb-2 block">
                  Don't see your ERP? Enter it here:
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="customERP"
                    placeholder="Enter your ERP system name"
                    value={customERPInput}
                    onChange={(e) => setCustomERPInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCustomERP();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={handleAddCustomERP}
                    disabled={!customERPInput.trim()}
                  >
                    Add
                  </Button>
                </div>
                {customERPs.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {customERPs.map(erp => (
                      <div key={erp} className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 text-slate-900 rounded-full text-sm">
                        {erp}
                        <button
                          type="button"
                          onClick={() => handleRemoveCustomERP(erp)}
                          className="hover:text-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex gap-3 pt-4">
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
        </div>
      </Card>
    </div>
  );
}
