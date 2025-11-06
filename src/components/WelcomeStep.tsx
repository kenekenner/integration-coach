import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle2, Clock } from 'lucide-react';
import { AssessmentData } from '../App';
import { useRef } from 'react';
import { toast } from 'sonner@2.0.3';

interface WelcomeStepProps {
  data: AssessmentData;
  onNext: () => void;
  onBack: () => void;
  onDevModeUpload?: (recommendations: any) => void;
  onScenarioUpload?: (scenario: AssessmentData) => void;
}

export function WelcomeStep({ onNext, onDevModeUpload, onScenarioUpload }: WelcomeStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scenarioInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string' && onDevModeUpload) {
          try {
            const recommendations = JSON.parse(content);
            onDevModeUpload(recommendations);
            toast.success('Recommendations uploaded successfully!');
          } catch (error) {
            toast.error('Failed to parse the uploaded file. Please ensure it is a valid JSON file.');
          }
        }
      };

      reader.readAsText(file);
    }
  };

  const handleScenarioUpload = () => {
    const fileInput = scenarioInputRef.current;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string' && onScenarioUpload) {
          try {
            const scenario = JSON.parse(content);
            onScenarioUpload(scenario);
            toast.success('Scenario loaded successfully!', {
              description: 'Assessment data has been pre-filled'
            });
          } catch (error) {
            toast.error('Failed to parse scenario file. Please ensure it is valid JSON.');
          }
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-12 bg-white border-slate-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <img 
              src="https://www.celigo.com/wp-content/uploads/2025/10/Celigo-AI-Integration_Coach_1.svg"
              alt="Celigo AI Integration Coach"
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-[#1C1C1C] mb-4">Welcome to your integration assessment</h2>
          <p className="text-[#1C1C1C] leading-relaxed">
            Integration planning can be a daunting task, but you're not alone. Celigo's Integration 
            Platform as a Service (iPaaS) and in-house Solution Consultants have helped thousands of 
            online retailers reach their integration maturity goals for over a decade.
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 mb-8">
          <h3 className="text-[#1C1C1C] mb-6">What You'll Get</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#1C1C1C]">
                  Personalized recommendations using our vast proprietary data from thousands of successful implementations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#1C1C1C]">
                  Quick-win suggestions and long-term integration strategies tailored to your architecture
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#1C1C1C]">
                  Success stories from real Celigo customers who faced challenges similar to yours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[#1C1C1C] mb-8">
          <Clock className="w-5 h-5" />
          <span>Takes less than 10 minutes to complete</span>
        </div>

        <Button 
          onClick={onNext} 
          size="lg" 
          className="w-full"
        >
          Get Started
        </Button>

        {/* Dev mode links - both on same line */}
        {(onDevModeUpload || onScenarioUpload) && (
          <div className="mt-6 text-center flex items-center justify-center gap-3">
            {onDevModeUpload && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".json"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                  style={{ opacity: 0.3 }}
                >
                  dev
                </button>
              </>
            )}
            
            {onScenarioUpload && (
              <>
                <input
                  type="file"
                  ref={scenarioInputRef}
                  accept=".json"
                  onChange={handleScenarioUpload}
                  style={{ display: 'none' }}
                />
                {onDevModeUpload && <span className="text-xs text-slate-300" style={{ opacity: 0.3 }}>|</span>}
                <button
                  onClick={() => scenarioInputRef.current?.click()}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                  style={{ opacity: 0.3 }}
                >
                  scenario
                </button>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}