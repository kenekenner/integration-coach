import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Copy, ExternalLink, Upload, CheckCircle2, Sparkles, FileJson, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';

interface ManualGPTDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  assessmentData: any;
  onRecommendationsReceived: (recommendations: any) => void;
}

// ✅ Custom GPT URL configured for "Ask Celigo for eCommerce"
const CUSTOM_GPT_URL = "https://chatgpt.com/g/g-68b1fc4f4ed481918e1e9304815a2f95-ask-celigo-for-ecommerce";

const GPT_PROMPT = `Please analyze this ecommerce integration assessment and provide detailed recommendations organized by function (ERP & Financial Management, Order Management & Fulfillment, Demand Planning, Data & Analytics, Sales & Marketing).

For each functional area, identify:
- Recommended integrations between their specific applications
- Quick wins (low-effort, high-impact automations)
- Current risks and gaps caused by manual processes
- How Celigo's prebuilt connectors, templates, and integration platform capabilities can address their needs

Return your analysis as JSON and make it downloadable as a file named Integration-Recommendations.json with this exact structure:

{
  "executiveSummary": "2-3 sentence overview of the current state and key opportunities, highlighting manual processes and data latency issues",
  "priorityRecommendations": [
    {
      "title": "Recommendation title focused on specific integration automation",
      "priority": "High|Medium|Low",
      "description": "Detailed description that references their specific apps and pain points. Include how Celigo prebuilt connectors or templates can help (e.g., 'Use Celigo's prebuilt NetSuite-Shopify connector' or 'Leverage Celigo's real-time sync capabilities')",
      "expectedBenefit": "Quantifiable business impact (e.g., 'Reduce inventory discrepancies by 90%', 'Cut reconciliation time by 85%')",
      "estimatedEffort": "Low|Medium|High"
    }
  ],
  "integrationOpportunities": [
    {
      "integration": "Specific App A → Specific App B (using their actual applications)",
      "useCase": "Detailed use case for this integration (e.g., 'Real-time order and fulfillment status sync', 'Automate forecast and actuals data exchange')",
      "businessImpact": "How this integration solves their pain points and improves operations"
    }
  ],
  "quickWins": [
    "Specific, actionable quick win using their actual tech stack (e.g., 'Automate daily Snowflake-to-Anaplan data push', 'Configure Slack alerts for failed Shopify-ERP syncs')"
  ],
  "nextSteps": [
    "Concrete next step that references their systems (e.g., 'Map current data flows between [their ERP] and [their OMS]', 'Pilot real-time inventory sync between [App A] and [App B]')"
  ]
}

IMPORTANT GUIDELINES:
- Reference their specific applications by name throughout all recommendations
- Highlight where Celigo has prebuilt connectors, templates, or proven capabilities
- Focus on automating manual processes and eliminating data latency
- Provide quantifiable benefits where possible (percentages, time savings, error reduction)
- Organize recommendations by business function when describing them
- Include 4-6 priority recommendations, 5-7 integration opportunities, 3-4 quick wins, and 4-5 next steps
- Do NOT include references to case studies, composite personas, or specific customer names
- Do NOT invent or hallucinate Celigo connector availability - only mention Celigo when you have knowledge of relevant capabilities`;

export function ManualGPTDialog({ open, onOpenChange, assessmentData, onRecommendationsReceived }: ManualGPTDialogProps) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [hasCopied, setHasCopied] = useState(false); // Track if copy was ever successful
  const [step, setStep] = useState<'instructions' | 'upload'>('instructions');
  const [isDragging, setIsDragging] = useState(false);

  // Check if Custom GPT URL has been updated
  if (CUSTOM_GPT_URL.includes('YOUR_CUSTOM_GPT_ID')) {
    console.warn('⚠️ CUSTOM_GPT_URL needs to be updated in /components/ManualGPTDialog.tsx');
    console.warn('📖 See /QUICK-START-MANUAL-GPT.md for instructions');
  }

  const handleCopyToClipboard = async () => {
    const fullContent = `${GPT_PROMPT}\n\n---\n\nASSESSMENT DATA:\n${JSON.stringify(assessmentData, null, 2)}`;
    
    // Skip clipboard entirely - just download the file
    toast.info("Downloading assessment + prompt...");
    
    try {
      const blob = new Blob([fullContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `assessment-and-prompt-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setCopyStatus('copied');
      setHasCopied(true);
      toast.success("Downloaded successfully!", {
        description: "Open the file, copy its contents, and paste into ChatGPT"
      });
      
      setTimeout(() => setCopyStatus('idle'), 3000);
      setTimeout(() => setStep('upload'), 2000);
    } catch (downloadErr) {
      console.error('Download failed:', downloadErr);
      toast.error("Download failed", {
        description: "Please check browser permissions"
      });
    }
  };

  const handleFileUpload = (file: File) => {
    if (!file) return;

    if (!file.name.endsWith('.json')) {
      toast.error("Invalid file type", {
        description: "Please upload a JSON file from ChatGPT"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const recommendations = JSON.parse(content);
        
        // Validate the structure
        if (!recommendations.executiveSummary || !recommendations.priorityRecommendations) {
          throw new Error("Invalid recommendations structure");
        }
        
        toast.success("Recommendations loaded successfully!");
        onRecommendationsReceived(recommendations);
        onOpenChange(false);
        setStep('instructions'); // Reset for next time
      } catch (err) {
        console.error('Failed to parse JSON:', err);
        toast.error("Invalid JSON file", {
          description: "Please make sure you uploaded the recommendations file from ChatGPT"
        });
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Get Your AI Recommendations
          </DialogTitle>
          <DialogDescription>
            Use our Custom GPT to analyze your assessment and receive personalized recommendations
          </DialogDescription>
        </DialogHeader>

        {step === 'instructions' && (
          <div className="space-y-6 pt-4">
            {/* Step 1 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">Copy Assessment & Prompt</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Click the button below to download a text file with your assessment data and analysis prompt.
                  </p>
                  <Button
                    onClick={handleCopyToClipboard}
                    className="w-full flex items-center justify-center gap-2"
                    variant={copyStatus === 'copied' ? 'outline' : 'default'}
                  >
                    {copyStatus === 'copied' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Downloaded Successfully!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Download Assessment + Prompt
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">Visit Our Custom GPT</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Open our specialized Integration Analysis GPT and paste (Ctrl+V or Cmd+V) the content from your clipboard.
                  </p>
                  <Button
                    onClick={() => window.open(CUSTOM_GPT_URL, '_blank')}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Custom GPT
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">
                    Note: Requires a free ChatGPT account or ChatGPT Plus subscription
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">Upload Recommendations</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    ChatGPT will provide a JSON response. Copy the JSON object and save it as a .json file, then upload it here.
                  </p>
                  <Button
                    onClick={() => setStep('upload')}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Ready to Upload
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Alert */}
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm text-slate-700">
                <strong>Pro Tip:</strong> In ChatGPT, the analysis will appear in a code block. Click the 
                <strong> "Copy code"</strong> button in the top-right corner, paste into a text editor 
                (Notepad, TextEdit, VS Code), and save as <code className="bg-white px-1 rounded">recommendations.json</code>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {step === 'upload' && (
          <div className="space-y-4 pt-4">
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-slate-900 mb-2">Assessment Copied!</h3>
              <p className="text-sm text-slate-600 mb-4">
                Now paste it into our Custom GPT, then upload the recommendations file here.
              </p>
            </div>

            {/* File Upload Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                isDragging
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <FileJson className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-900 mb-2">Drop your Integration-Recommendations.json file here</p>
              <p className="text-sm text-slate-600 mb-4">or</p>
              <Button
                onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.json,application/json';
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) handleFileUpload(file);
                  };
                  input.click();
                }}
                variant="outline"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>

            {/* Help Text */}
            <Alert className="bg-slate-50 border-slate-200">
              <AlertDescription className="text-xs text-slate-600">
                <strong>Finding the JSON in ChatGPT:</strong> The response will be in a code block labeled "json". 
                Click the small copy icon (📋) in the top-right corner of that block to copy the entire JSON object.
              </AlertDescription>
            </Alert>

            {/* Quick links */}
            <div className="flex gap-2">
              <Button
                onClick={() => setStep('instructions')}
                variant="ghost"
                size="sm"
                className="text-sm"
              >
                Back to Instructions
              </Button>
              <Button
                onClick={() => window.open(CUSTOM_GPT_URL, '_blank')}
                variant="ghost"
                size="sm"
                className="text-sm ml-auto"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Open GPT
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}