import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft, Plus, Trash2, ArrowRightLeft } from 'lucide-react';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { getAppLogo } from './utils/app-logos';
import { StepLogo } from './StepLogo';

interface IntegrationDetailsStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
  onUpdate?: (data: Partial<AssessmentData>) => void;
}

type IntegrationType = 'native' | 'prebuilt' | 'custom' | 'manual';

export function IntegrationDetailsStep({ data, onNext, onBack, onUpdate }: IntegrationDetailsStepProps) {
  const [integrations, setIntegrations] = useState(data.integrations);
  const [selectedFrom, setSelectedFrom] = useState<string[]>([]);
  const [selectedTo, setSelectedTo] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<IntegrationType | null>(null);
  
  // Refs to preserve scroll position
  const fromScrollRef = useRef<HTMLDivElement>(null);
  const toScrollRef = useRef<HTMLDivElement>(null);

  // Get all unique apps from selected apps
  const allApps = Object.entries(data.selectedApps).flatMap(([_, apps]) =>
    apps.map(app => app.name)
  );

  const uniqueApps = Array.from(new Set(allApps)).sort();

  const handleToggleFrom = (app: string) => {
    // Preserve scroll position
    const scrollPos = fromScrollRef.current?.scrollTop || 0;
    
    setSelectedFrom(prev => 
      prev.includes(app) 
        ? prev.filter(a => a !== app)
        : [...prev, app]
    );
    
    // Restore scroll position after state update
    setTimeout(() => {
      if (fromScrollRef.current) {
        fromScrollRef.current.scrollTop = scrollPos;
      }
    }, 0);
  };

  const handleToggleTo = (app: string) => {
    // Preserve scroll position
    const scrollPos = toScrollRef.current?.scrollTop || 0;
    
    setSelectedTo(prev => 
      prev.includes(app) 
        ? prev.filter(a => a !== app)
        : [...prev, app]
    );
    
    // Restore scroll position after state update
    setTimeout(() => {
      if (toScrollRef.current) {
        toScrollRef.current.scrollTop = scrollPos;
      }
    }, 0);
  };

  const handleAddIntegration = () => {
    if (selectedFrom.length === 0 || selectedTo.length === 0 || !selectedType) return;

    const fromApps = selectedFrom.join(' / ');
    const toApps = selectedTo.join(' / ');

    const newIntegrations = [...integrations, {
      from: fromApps,
      to: toApps,
      type: selectedType,
    }];
    
    setIntegrations(newIntegrations);
    
    // Real-time update to parent for constellation
    onUpdate?.({ integrations: newIntegrations });

    setSelectedFrom([]);
    setSelectedTo([]);
    setSelectedType(null);
  };

  const handleRemoveIntegration = (index: number) => {
    const newIntegrations = integrations.filter((_, i) => i !== index);
    setIntegrations(newIntegrations);
    
    // Real-time update to parent for constellation
    onUpdate?.({ integrations: newIntegrations });
  };

  const handleContinue = () => {
    onNext({ integrations });
  };

  const getIntegrationTypeBadge = (type: IntegrationType) => {
    const styles = {
      native: 'bg-[rgba(28,28,28,0.1)] text-[#1C1C1C]',
      prebuilt: 'bg-[rgba(28,28,28,0.1)] text-[#1C1C1C]',
      custom: 'bg-[rgba(28,28,28,0.1)] text-[#1C1C1C]',
      manual: 'bg-[rgba(28,28,28,0.1)] text-[#1C1C1C]',
    };
    
    const labels = {
      native: 'Native',
      prebuilt: 'Prebuilt',
      custom: 'Custom API',
      manual: 'Manual',
    };

    return (
      <Badge className={styles[type]}>
        {labels[type]}
      </Badge>
    );
  };

  const AppCard = ({ appName, selected, onClick }: { appName: string; selected: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-3 border-2 rounded-lg transition-all flex flex-col items-center gap-2 min-w-[100px] ${
        selected
          ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
          : 'border-slate-200 hover:border-slate-300 bg-white'
      }`}
    >
      <img src={getAppLogo(appName)} alt={appName} className="w-12 h-12 rounded object-contain" />
      <span className="text-xs text-slate-900 text-center line-clamp-2">{appName}</span>
    </button>
  );

  const hasSelections = selectedFrom.length > 0 && selectedTo.length > 0;

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-6">
          <h2 className="text-slate-900 mb-2">Integration Details</h2>
          <div className="p-4 bg-[rgba(28,28,28,0.05)] rounded-lg border border-[rgba(0,0,0,0.05)]">
            <p className="text-sm text-[#1C1C1C]">
              <strong>Tip:</strong> Understanding your integration types helps us identify opportunities 
              for consolidation and automation. Don't worry if you don't know all the details—you can skip this step.
            </p>
          </div>
        </div>

        {/* Existing Integrations */}
        {integrations.length > 0 && (
          <div className="mb-6">
            <Label className="text-slate-900 mb-3 block">Current Integrations</Label>
            <div className="space-y-2">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 text-sm">{integration.from}</span>
                  </div>
                  <ArrowRightLeft className="w-4 h-4 text-slate-400" />
                  <div className="flex items-center gap-2">
                    <span className="text-slate-900 text-sm">{integration.to}</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    {getIntegrationTypeBadge(integration.type)}
                    <button
                      type="button"
                      onClick={() => handleRemoveIntegration(index)}
                      className="text-red-600 hover:text-red-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add New Integration */}
        <div className="space-y-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <Label className="text-slate-900 block">Add Integration</Label>
          
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
            {/* From Apps */}
            <div>
              <Label className="text-slate-700 text-sm mb-3 block">From (select one or more)</Label>
              <div 
                ref={fromScrollRef}
                className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto p-2 bg-white rounded-lg border border-slate-200"
              >
                {uniqueApps.map((app) => (
                  <AppCard
                    key={app}
                    appName={app}
                    selected={selectedFrom.includes(app)}
                    onClick={() => handleToggleFrom(app)}
                  />
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center pt-16">
              <ArrowRightLeft className="w-6 h-6 text-slate-400" />
            </div>

            {/* To Apps */}
            <div>
              <Label className="text-slate-700 text-sm mb-3 block">To (select one or more)</Label>
              <div 
                ref={toScrollRef}
                className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto p-2 bg-white rounded-lg border border-slate-200"
              >
                {uniqueApps.map((app) => (
                  <AppCard
                    key={app}
                    appName={app}
                    selected={selectedTo.includes(app)}
                    onClick={() => handleToggleTo(app)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Integration Type - Always visible */}
          <div>
            <Label htmlFor="type" className="text-slate-700 text-sm mb-2 block">
              How is this integration implemented?
            </Label>
            <div className="grid grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setSelectedType('native')}
                disabled={!hasSelections}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  !hasSelections
                    ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                    : selectedType === 'native'
                    ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="text-sm">Native</p>
                <p className="text-xs text-slate-600 mt-1">Built-in integration</p>
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('prebuilt')}
                disabled={!hasSelections}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  !hasSelections
                    ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                    : selectedType === 'prebuilt'
                    ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="text-sm">Prebuilt</p>
                <p className="text-xs text-slate-600 mt-1">Using connector/template</p>
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('custom')}
                disabled={!hasSelections}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  !hasSelections
                    ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                    : selectedType === 'custom'
                    ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="text-sm">Custom API</p>
                <p className="text-xs text-slate-600 mt-1">Custom code/middleware</p>
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('manual')}
                disabled={!hasSelections}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  !hasSelections
                    ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                    : selectedType === 'manual'
                    ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="text-sm">Manual</p>
                <p className="text-xs text-slate-600 mt-1">CSV uploads, manual</p>
              </button>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleAddIntegration}
            disabled={selectedFrom.length === 0 || selectedTo.length === 0 || !selectedType}
            variant="outline"
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </Button>
        </div>

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
    </div>
  );
}
