import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { StepLogo } from './StepLogo';

interface PainPointsStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
}

const COMMON_PAIN_POINTS = [
  'Limited visibility into failed syncs',
  'High maintenance overhead for custom scripts',
  'Manual reconciliation processes',
  'Fragmented data across systems',
  'Lack of real-time data sync',
  'Scalability limits with current integrations',
  'No centralized error logging',
  'Integration failures go unnoticed',
  'Time-consuming manual data entry',
  'Inconsistent data quality',
  'Slow order processing',
  'Inventory sync delays',
];

const COMMON_GOALS = [
  'Automate manual processes',
  'Improve data accuracy',
  'Real-time data synchronization',
  'Centralized integration management',
  'Better visibility and monitoring',
  'Scale integrations as we grow',
  'Reduce IT maintenance burden',
  'Faster order fulfillment',
  'Consolidate multiple tools',
  'Improve customer experience',
  'Better reporting and analytics',
  'Migrate away from legacy systems',
];

export function PainPointsStep({ data, onNext, onBack }: PainPointsStepProps) {
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>(data.painPoints);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(data.goals);
  const [additionalContext, setAdditionalContext] = useState(data.additionalContext);

  const togglePainPoint = (point: string) => {
    setSelectedPainPoints(prev =>
      prev.includes(point)
        ? prev.filter(p => p !== point)
        : [...prev, point]
    );
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleContinue = () => {
    onNext({
      painPoints: selectedPainPoints,
      goals: selectedGoals,
      additionalContext,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Pain Points & Goals</h2>
          <p className="text-slate-600">
            Help us understand your current challenges and what you're hoping to achieve.
          </p>
        </div>

        <div className="space-y-8">
          {/* Pain Points */}
          <div>
            <Label className="text-slate-900 mb-3 block">
              What are your current integration pain points? (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {COMMON_PAIN_POINTS.map((point) => {
                const isSelected = selectedPainPoints.includes(point);
                return (
                  <button
                    key={point}
                    type="button"
                    onClick={() => togglePainPoint(point)}
                    className={`p-3 border-2 rounded-lg text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-[#1C1C1C] bg-[rgba(28,28,28,0.05)]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-slate-300'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-sm text-slate-900">{point}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Goals */}
          <div>
            <Label className="text-slate-900 mb-3 block">
              What are your integration goals? (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {COMMON_GOALS.map((goal) => {
                const isSelected = selectedGoals.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleGoal(goal)}
                    className={`p-3 border-2 rounded-lg text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-green-600 bg-green-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      isSelected
                        ? 'border-green-600 bg-green-600'
                        : 'border-slate-300'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-sm text-slate-900">{goal}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Context */}
          <div>
            <Label htmlFor="context" className="text-slate-900 mb-2 block">
              Any additional context or specific challenges? (Optional)
            </Label>
            <Textarea
              id="context"
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              placeholder="Share any specific details about your integration landscape, upcoming projects, or unique challenges..."
              className="min-h-[120px]"
            />
          </div>
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
