import { useState, useEffect } from 'react';
import { WelcomeStep } from './components/WelcomeStep';
import { BasicInfoStep } from './components/BasicInfoStep';
import { ERPStep } from './components/ERPStep';
import { TechStackStep } from './components/TechStackStep';
import { AppContextStep } from './components/AppContextStep';
import { IntegrationDetailsStep } from './components/IntegrationDetailsStep';
import { PainPointsStep } from './components/PainPointsStep';
import { ReviewStep } from './components/ReviewStep';
import { Progress } from './components/ui/progress';
import { Toaster } from './components/ui/sonner';
import { IntegrationConstellation } from './components/IntegrationConstellation';

export interface AssessmentData {
  // Basic Info
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  companyName: string;
  companySize: string;
  
  // ERP
  hasERP: boolean | null;
  erpSystems: string[];
  
  // Tech Stack
  selectedApps: {
    [category: string]: Array<{
      name: string;
      context?: string;
      isCustom?: boolean;
    }>;
  };
  
  // Category interaction tracking
  categoryInteractions: {
    [category: string]: boolean;
  };
  
  // Integration Details
  integrations: Array<{
    from: string;
    to: string;
    type: 'native' | 'prebuilt' | 'custom' | 'manual';
  }>;
  
  // Pain Points & Goals
  painPoints: string[];
  goals: string[];
  additionalContext: string;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    companyName: '',
    companySize: '',
    hasERP: null,
    erpSystems: [],
    selectedApps: {},
    categoryInteractions: {},
    integrations: [],
    painPoints: [],
    goals: [],
    additionalContext: '',
  });
  
  // Dev mode: store uploaded recommendations
  const [devRecommendations, setDevRecommendations] = useState<any>(null);
// Auto-resize iframe for Framer embed
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ height }, '*');
    };

    // Send height on mount and whenever content changes
    sendHeight();

    // Use ResizeObserver to detect any size changes
    const resizeObserver = new ResizeObserver(() => {
      sendHeight();
    });

    resizeObserver.observe(document.body);

    // Also send height after a short delay to catch any async content
    const timer = setTimeout(sendHeight, 100);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [currentStep, assessmentData]); // Re-run when step or data changes

  const steps = [
    { component: WelcomeStep, title: 'Welcome' },
    { component: BasicInfoStep, title: 'Basic Information' },
    { component: ERPStep, title: 'ERP System' },
    { component: TechStackStep, title: 'Technology Stack' },
    { component: AppContextStep, title: 'App Context' },
    { component: IntegrationDetailsStep, title: 'Integration Details' },
    { component: PainPointsStep, title: 'Pain Points & Goals' },
    { component: ReviewStep, title: 'Review & Export' },
  ];

  const CurrentStepComponent = steps[currentStep].component;
  const progress = (currentStep / (steps.length - 1)) * 100;

  const handleNext = (data?: Partial<AssessmentData>) => {
    if (data) {
      setAssessmentData(prev => ({ ...prev, ...data }));
    }
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  // Real-time update handler - updates data without changing step
  const handleUpdate = (data: Partial<AssessmentData>) => {
    setAssessmentData(prev => ({ ...prev, ...data }));
  };

  // Dev mode: handle JSON upload and skip to review step
  const handleDevModeUpload = (recommendations: any) => {
    setDevRecommendations(recommendations);
    // Skip directly to the review step (last step)
    setCurrentStep(steps.length - 1);
    window.scrollTo(0, 0);
  };

  // Scenario upload: load assessment data and go to review step
  const handleScenarioUpload = (scenario: AssessmentData) => {
    setAssessmentData(scenario);
    // Skip to review step to see pre-filled summary
    setCurrentStep(steps.length - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="relative bg-[#FBFBFB] pb-12">
        {/* Fixed Background Constellation */}
        <IntegrationConstellation
          selectedApps={assessmentData.selectedApps}
          integrations={assessmentData.integrations}
          erpSystems={assessmentData.erpSystems}
          currentStep={currentStep}
        />

        {/* Sticky Header with Progress Bar */}
        {currentStep > 0 && (
          <header className="sticky top-0 z-50 bg-white border-b border-[rgba(0,0,0,0.05)]">
            <div className="max-w-5xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[rgba(28,28,28,0.5)] text-sm font-['Area_Normal',sans-serif] font-semibold">
                    Step {currentStep} of {steps.length - 1}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={progress} className="h-1" />
              </div>
            </div>
          </header>
        )}

        {/* Main Content */}
        <main className="relative z-10 max-w-5xl mx-auto px-6 py-8">
          <CurrentStepComponent
            data={assessmentData}
            onNext={handleNext}
            onBack={handleBack}
            onUpdate={handleUpdate}
            onDevModeUpload={currentStep === 0 ? handleDevModeUpload : undefined}
            devRecommendations={currentStep === steps.length - 1 ? devRecommendations : undefined}
            onScenarioUpload={currentStep === 0 ? handleScenarioUpload : undefined}
          />
        </main>
      </div>
      <Toaster />
    </>
  );
}