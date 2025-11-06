import { Button } from './ui/button';
import { Card } from './ui/card';
import { AssessmentData } from '../App';
import { ArrowLeft, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { StepLogo } from './StepLogo';
import { useState, useEffect } from 'react';
import { ManualGPTDialog } from './ManualGPTDialog';
import { RecommendationsDisplay } from './RecommendationsDisplay';

interface ReviewStepProps {
  data: AssessmentData;
  onNext: () => void;
  onBack: () => void;
  devRecommendations?: any;
}

export function ReviewStep({ data, onBack, devRecommendations }: ReviewStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGPTDialog, setShowGPTDialog] = useState(false);
  const [recommendations, setRecommendations] = useState<any>(devRecommendations || null);

  // Create a clean, serializable version of the data
  const getCleanData = () => {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      jobTitle: data.jobTitle,
      email: data.email,
      companyName: data.companyName,
      companySize: data.companySize,
      hasERP: data.hasERP,
      erpSystems: data.erpSystems,
      selectedApps: data.selectedApps,
      categoryInteractions: data.categoryInteractions,
      integrations: data.integrations,
      painPoints: data.painPoints,
      goals: data.goals,
      additionalContext: data.additionalContext,
      timestamp: new Date().toISOString(),
    };
  };

  const handleOpenManualFlow = () => {
    setShowGPTDialog(true);
  };

  const handleRecommendationsReceived = (recs: any) => {
    setRecommendations(recs);
    toast.success("Recommendations loaded successfully!", {
      description: "Scroll down to view your personalized integration strategy"
    });
  };

  const handleSubmitForAnalysis = async () => {
    setIsSubmitting(true);
    
    try {
      // ✅ Using Vercel proxy to handle CORS
      // Production URL from Vercel deployment
      const API_URL = "https://celigo-proxy.vercel.app/api/submit";

      // Get the assessment data as a plain object
      const assessment = getCleanData();
      
      // Verify the data (for debugging)
      console.log("Exported JSON (preview):", assessment);
      console.log("Assessment type:", typeof assessment);
      console.log("Is object?", assessment && typeof assessment === "object");

      // Safety check
      if (!assessment || typeof assessment !== "object") {
        throw new Error("Assessment data is not a valid object");
      }

      console.log("Sending to API:", API_URL);
      console.log("Payload preview:", {
        firstName: assessment.firstName,
        lastName: assessment.lastName,
        email: assessment.email,
        totalApps: Object.values(assessment.selectedApps || {}).flat().length,
        integrationCount: assessment.integrations?.length || 0
      });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ assessment }),
        mode: 'cors'
      });

      console.log("Response status:", response.status);
      console.log("Response ok?", response.ok);

      // Parse response
      const contentType = response.headers.get('content-type');
      console.log("Response content-type:", contentType);
      
      let result;
      
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.log("Raw response text:", text);
        try {
          result = JSON.parse(text);
        } catch {
          console.error("Non-JSON response:", text);
          throw new Error("Invalid response from server");
        }
      }

      console.log("Parsed result:", result);

      if (result.error) {
        console.error("Backend Error:", result.error);
        
        // Check if it's an OpenAI quota error
        if (result.error.includes("exceeded your current quota") || result.error.includes("insufficient_quota")) {
          toast.success("✅ Assessment submitted successfully!", {
            duration: 8000,
            description: "Your data has been captured. The AI analysis service is temporarily unavailable (quota exceeded). Your assessment has been downloaded for manual review."
          });
          
          // Auto-download the assessment since AI analysis isn't available
          handleDownloadJSON();
        } else {
          toast.error("Backend Error", {
            description: result.error.substring(0, 200) + "..."
          });
        }
        
        setIsSubmitting(false);
        return;
      }

      // ✅ Success: store or display results
      console.log("AI Analysis:", result.analysis);
      console.log("PDF Link:", result.pdfUrl);
      console.log("Test Mode?:", result.testMode);

      // Check if we're in TEST MODE
      if (result.testMode) {
        toast.success("✅ Test successful! Your wizard works perfectly. Mock analysis returned.", {
          duration: 6000,
          description: "TEST MODE is enabled. Deploy to production to get real AI recommendations."
        });
      } else {
        toast.success("Analysis complete! Check your email for recommendations.");
      }
      
      // Optionally open PDF in new tab
      if (result.pdfUrl && !result.testMode) {
        console.log("Opening PDF:", result.pdfUrl);
        // Uncomment to auto-open:
        // window.open(result.pdfUrl, "_blank");
      }

      // Example 1 — open PDF in a new tab (uncomment if needed)
      // if (result.pdfUrl) {
      //   window.open(result.pdfUrl, "_blank");
      // }

      // Example 2 — display inside your page (if you have a container)
      // document.querySelector("#analysis-output").textContent =
      //   JSON.stringify(result.analysis, null, 2);

    } catch (err) {
      console.error("Fetch failed:", err);
      const error = err as Error;
      
      if (error.message.includes('Failed to fetch')) {
        // CORS error - offer to copy JSON instead
        const assessment = getCleanData();
        const jsonString = JSON.stringify(assessment, null, 2);
        
        // Try to copy to clipboard as fallback
        try {
          await navigator.clipboard.writeText(jsonString);
          toast.error("API connection failed. Assessment JSON copied to clipboard. Please contact support.", {
            duration: 8000
          });
        } catch {
          // If clipboard fails, show download option
          console.error("Unable to connect to API. Assessment data:", assessment);
          toast.error("API connection failed. Check console for assessment data or contact support.", {
            duration: 8000
          });
        }
      } else {
        toast.error("Unable to reach the analysis service. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Download JSON fallback
  const handleDownloadJSON = () => {
    const assessment = getCleanData();
    const jsonString = JSON.stringify(assessment, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `celigo-assessment-${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Assessment downloaded successfully!");
  };



  const totalApps = Object.values(data.selectedApps).reduce(
    (sum, apps) => sum + apps.length,
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <StepLogo />
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-slate-900 mb-2">Assessment Complete!</h2>
          <p className="text-slate-600">
            Thank you for completing the integration assessment. Review your information below.
          </p>
        </div>

        {/* Summary */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-slate-900 mb-3">Contact Information</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-600">Name</p>
                <p className="text-slate-900">{data.firstName} {data.lastName}</p>
              </div>
              <div>
                <p className="text-slate-600">Title</p>
                <p className="text-slate-900">{data.jobTitle}</p>
              </div>
              <div>
                <p className="text-slate-600">Company</p>
                <p className="text-slate-900">{data.companyName}</p>
              </div>
              <div>
                <p className="text-slate-600">Email</p>
                <p className="text-slate-900">{data.email}</p>
              </div>
              {data.companySize && (
                <div>
                  <p className="text-slate-600">Company Size</p>
                  <p className="text-slate-900">
                    {data.companySize === 'under-20m' && 'Under $20M ARR'}
                    {data.companySize === '20m-30m' && '$20M - $30M ARR'}
                    {data.companySize === '30m-50m' && '$30M - $50M ARR'}
                    {data.companySize === '50m-70m' && '$50M - $70M ARR'}
                    {data.companySize === '70m-100m' && '$70M - $100M ARR'}
                    {data.companySize === '100m-150m' && '$100M - $150M ARR'}
                    {data.companySize === '150m-500m' && '$150M - $500M ARR'}
                    {data.companySize === '500m-plus' && '$500M+ ARR'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ERP */}
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-slate-900 mb-3">ERP System</h3>
            {data.hasERP && data.erpSystems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {data.erpSystems.map(erp => (
                  <Badge key={erp} variant="secondary" className="bg-blue-100 text-blue-700">
                    {erp}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">No ERP system</p>
            )}
          </div>

          {/* Tech Stack */}
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-slate-900 mb-3">Technology Stack</h3>
            <p className="text-slate-600 mb-3">
              {totalApps} applications across {Object.keys(data.selectedApps).filter(cat => data.selectedApps[cat].length > 0).length} categories
            </p>
            <div className="space-y-3">
              {Object.entries(data.selectedApps).map(([category, apps]) => (
                apps.length > 0 && (
                  <div key={category}>
                    <p className="text-sm text-slate-700 mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {apps.map((app) => (
                        <Badge key={app.name} variant="secondary" className="bg-blue-100 text-blue-700">
                          {app.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Integrations */}
          {data.integrations.length > 0 && (
            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="text-slate-900 mb-3">Integrations</h3>
              <p className="text-slate-600 mb-3">{data.integrations.length} documented integrations</p>
            </div>
          )}

          {/* Pain Points & Goals */}
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-slate-900 mb-3">Pain Points & Goals</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-600 mb-2">Pain Points ({data.painPoints.length})</p>
                {data.painPoints.length > 0 ? (
                  <ul className="space-y-1">
                    {data.painPoints.slice(0, 3).map((point, i) => (
                      <li key={i} className="text-slate-900">• {point}</li>
                    ))}
                    {data.painPoints.length > 3 && (
                      <li className="text-slate-600">+ {data.painPoints.length - 3} more</li>
                    )}
                  </ul>
                ) : (
                  <p className="text-slate-600">None specified</p>
                )}
              </div>
              <div>
                <p className="text-slate-600 mb-2">Goals ({data.goals.length})</p>
                {data.goals.length > 0 ? (
                  <ul className="space-y-1">
                    {data.goals.slice(0, 3).map((goal, i) => (
                      <li key={i} className="text-slate-900">• {goal}</li>
                    ))}
                    {data.goals.length > 3 && (
                      <li className="text-slate-600">+ {data.goals.length - 3} more</li>
                    )}
                  </ul>
                ) : (
                  <p className="text-slate-600">None specified</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Get Recommendations */}
        {!recommendations && (
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <h3 className="text-slate-900 mb-2">Get AI-Powered Recommendations</h3>
            <p className="text-slate-700 mb-4">
              Use our Custom GPT to analyze your assessment and receive personalized integration 
              recommendations tailored to your technology stack and business goals.
            </p>
            <Button
              onClick={handleOpenManualFlow}
              className="flex items-center gap-[8px]"
            >
              <Sparkles className="w-4 h-4" />
              See my recommendations
            </Button>
          </div>
        )}

        {/* Next Steps */}
        {!recommendations && (
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-slate-900 mb-2">What's Next?</h3>
            <p className="text-slate-700 text-sm">
              Our AI coach will analyze your technology stack, integrations, and business goals to provide 
              tailored recommendations. The analysis takes just a moment in ChatGPT.
            </p>
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
            type="button"
            variant="outline"
            onClick={handleDownloadJSON}
            className="flex items-center gap-[8px] ml-auto"
          >
            <Download className="w-4 h-4" />
            Download Assessment
          </Button>
        </div>
      </Card>

      {/* Manual GPT Dialog */}
      <ManualGPTDialog
        open={showGPTDialog}
        onOpenChange={setShowGPTDialog}
        assessmentData={getCleanData()}
        onRecommendationsReceived={handleRecommendationsReceived}
      />

      {/* Recommendations Display */}
      {recommendations && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setRecommendations(null)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Assessment
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadJSON}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Assessment
            </Button>
          </div>
          <RecommendationsDisplay 
            data={recommendations} 
            assessmentData={getCleanData()}
          />
        </div>
      )}
    </div>
  );
}