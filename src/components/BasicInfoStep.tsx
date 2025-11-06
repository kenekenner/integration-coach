import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { AssessmentData } from '../App';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { StepLogo } from './StepLogo';

interface BasicInfoStepProps {
  data: AssessmentData;
  onNext: (data: Partial<AssessmentData>) => void;
  onBack: () => void;
}

const COMPANY_SIZE_OPTIONS = [
  { value: 'under-20m', label: 'Under $20M ARR' },
  { value: '20m-30m', label: '$20M - $30M ARR' },
  { value: '30m-50m', label: '$30M - $50M ARR' },
  { value: '50m-70m', label: '$50M - $70M ARR' },
  { value: '70m-100m', label: '$70M - $100M ARR' },
  { value: '100m-150m', label: '$100M - $150M ARR' },
  { value: '150m-500m', label: '$150M - $500M ARR' },
  { value: '500m-plus', label: '$500M+ ARR' },
];

export function BasicInfoStep({ data, onNext, onBack }: BasicInfoStepProps) {
  const [formData, setFormData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    jobTitle: data.jobTitle,
    email: data.email,
    companyName: data.companyName,
    companySize: data.companySize || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.companySize) newErrors.companySize = 'Please select a company size';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onNext(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Let's get to know you</h2>
          <p className="text-slate-600">
            We'll use this information to personalize your recommendations and send you the results.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-slate-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={`mt-1.5 ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-slate-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={`mt-1.5 ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Smith"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="jobTitle" className="text-slate-700">
              Job Title *
            </Label>
            <Input
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              className={`mt-1.5 ${errors.jobTitle ? 'border-red-500' : ''}`}
              placeholder="Director of IT"
            />
            {errors.jobTitle && (
              <p className="text-sm text-red-600 mt-1">{errors.jobTitle}</p>
            )}
          </div>

          <div>
            <Label htmlFor="companyName" className="text-slate-700">
              Company Name *
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className={`mt-1.5 ${errors.companyName ? 'border-red-500' : ''}`}
              placeholder="Your Company"
            />
            {errors.companyName && (
              <p className="text-sm text-red-600 mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-slate-700">
              Work Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`mt-1.5 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="john.smith@company.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
            <p className="text-sm text-slate-500 mt-1">
              We'll send your personalized recommendations to this email
            </p>
          </div>

          {/* Company Size */}
          <div className="pt-4 border-t border-slate-200">
            <Label htmlFor="companySize" className="text-slate-700">
              Company Size *
            </Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) => handleChange('companySize', value)}
            >
              <SelectTrigger
                id="companySize"
                className={`mt-1.5 ${errors.companySize ? 'border-red-500' : ''}`}
              >
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                {COMPANY_SIZE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.companySize && (
              <p className="text-sm text-red-600 mt-1">{errors.companySize}</p>
            )}
          </div>

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
              type="submit"
              className="flex-1 flex items-center justify-center gap-[8px]"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
