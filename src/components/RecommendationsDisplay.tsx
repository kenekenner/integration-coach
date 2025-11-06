import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle2, Target, Zap, TrendingUp, ArrowRight, Download, Printer, FileCode } from 'lucide-react';
import { Separator } from './ui/separator';
import { useRef } from 'react';
import { toast } from 'sonner@2.0.3';

interface Recommendation {
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
  expectedBenefit: string;
  estimatedEffort: 'Low' | 'Medium' | 'High';
}

interface IntegrationOpportunity {
  integration: string;
  useCase: string;
  businessImpact: string;
}

interface RecommendationsData {
  executiveSummary: string;
  priorityRecommendations: Recommendation[];
  integrationOpportunities: IntegrationOpportunity[];
  quickWins: string[];
  nextSteps: string[];
}

interface RecommendationsDisplayProps {
  data: RecommendationsData;
  assessmentData?: any;
}

export function RecommendationsDisplay({ data, assessmentData }: RecommendationsDisplayProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-slate-600';
    }
  };

  const handleDownloadReport = () => {
    const report = {
      generatedAt: new Date().toISOString(),
      assessment: assessmentData,
      recommendations: data
    };
    
    const jsonString = JSON.stringify(report, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `integration-recommendations-${new Date().getTime()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportHTML = () => {
    toast.info("Generating HTML file...");
    
    const companyName = assessmentData?.companyName || 'Your Company';
    const generatedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Generate complete standalone HTML
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Integration Recommendations - ${companyName}</title>
  <style>
    @import url('https://use.typekit.net/biz5xyw.css');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Area Normal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #FBFBFB;
      color: #1C1C1C;
      line-height: 1.6;
      padding: 40px 20px;
    }
    
    .container {
      max-width: 1024px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border-radius: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 6px 6px 50px 0px rgba(0, 0, 0, 0.05);
      margin-bottom: 24px;
      padding: 32px;
    }
    
    .card-header {
      background: linear-gradient(to bottom right, #EFF6FF, #DBEAFE);
      border-color: #BFDBFE;
    }
    
    .card-dark {
      background: linear-gradient(to bottom right, #1C1C1C, #2D2D2D);
      color: white;
      border-color: #404040;
    }
    
    .card-quickwins {
      background: white;
    }
    
    h1 {
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    
    h2 {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }
    
    h3 {
      font-size: 1.125rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    
    .flex {
      display: flex;
    }
    
    .items-center {
      align-items: center;
    }
    
    .items-start {
      align-items: flex-start;
    }
    
    .justify-between {
      justify-content: space-between;
    }
    
    .gap-2 {
      gap: 8px;
    }
    
    .gap-3 {
      gap: 12px;
    }
    
    .gap-4 {
      gap: 16px;
    }
    
    .mb-2 { margin-bottom: 8px; }
    .mb-3 { margin-bottom: 12px; }
    .mb-4 { margin-bottom: 16px; }
    .mt-4 { margin-top: 16px; }
    .pt-4 { padding-top: 16px; }
    
    .icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    
    .icon-sm {
      width: 20px;
      height: 20px;
    }
    
    .badge {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      border-width: 1px;
      padding: 4px 12px;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
    }
    
    .badge-high {
      background-color: #FEE2E2;
      color: #B91C1C;
      border-color: #FECACA;
    }
    
    .badge-medium {
      background-color: #FEF3C7;
      color: #B45309;
      border-color: #FDE68A;
    }
    
    .badge-low {
      background-color: #D1FAE5;
      color: #047857;
      border-color: #A7F3D0;
    }
    
    .badge-outline {
      background-color: white;
      border-color: rgba(0, 0, 0, 0.1);
    }
    
    .rec-box {
      background: #F8FAFC;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
      padding: 20px;
      margin-bottom: 16px;
    }
    
    .quickwin-box {
      background: #FFFBEB;
      border: 1px solid #FDE68A;
      border-radius: 0.5rem;
      padding: 12px;
      margin-bottom: 12px;
    }
    
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    
    .border-top {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .text-slate-600 {
      color: #64748B;
    }
    
    .text-slate-700 {
      color: #334155;
    }
    
    .text-slate-300 {
      color: #CBD5E1;
    }
    
    .text-sm {
      font-size: 0.875rem;
    }
    
    .text-xs {
      font-size: 0.75rem;
    }
    
    .text-red-600 { color: #DC2626; }
    .text-yellow-600 { color: #D97706; }
    .text-green-600 { color: #059669; }
    .text-blue-600 { color: #2563EB; }
    
    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: #2563EB;
      color: white;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      flex-shrink: 0;
    }
    
    .footer-text {
      color: #CBD5E1;
      font-size: 0.875rem;
    }
    
    button {
      background: white;
      color: #1C1C1C;
      border: none;
      padding: 10px 24px;
      border-radius: 0.5rem;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
    }
    
    button:hover {
      background: #F1F5F9;
    }
    
    @media print {
      body {
        background: white;
        padding: 0;
      }
      
      .card {
        box-shadow: none;
        page-break-inside: avoid;
      }
      
      h1, h2, h3 {
        page-break-after: avoid;
      }
      
      .rec-box {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header Card -->
    <div class="card card-header">
      <h1>Integration Recommendations</h1>
      <p class="text-slate-700 mb-3">Generated for <strong>${companyName}</strong> on ${generatedDate}</p>
      <p class="text-slate-700">
        ${data.executiveSummary}
      </p>
    </div>

    ${data.quickWins && data.quickWins.length > 0 ? `
    <!-- Quick Wins -->
    <div class="card card-quickwins">
      <div class="flex items-center gap-2 mb-4">
        <svg class="icon-sm text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <h2>Quick Wins</h2>
      </div>
      ${data.quickWins.map(win => `
        <div class="quickwin-box">
          <div class="flex items-start gap-3">
            <svg class="icon-sm text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p class="text-sm">${win}</p>
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    <!-- Priority Recommendations -->
    <div class="card">
      <div class="flex items-center gap-2 mb-4">
        <svg class="icon-sm text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2>Priority Recommendations</h2>
      </div>
      ${data.priorityRecommendations.map(rec => `
        <div class="rec-box">
          <div class="flex items-start justify-between mb-3">
            <h3>${rec.title}</h3>
            <span class="badge badge-${rec.priority.toLowerCase()}">${rec.priority} Priority</span>
          </div>
          <p class="text-slate-700 mb-4">${rec.description}</p>
          <div class="grid-2 pt-4 border-top">
            <div>
              <p class="text-xs text-slate-600 mb-2">Expected Benefit</p>
              <p class="text-sm">${rec.expectedBenefit}</p>
            </div>
            <div>
              <p class="text-xs text-slate-600 mb-2">Estimated Effort</p>
              <p class="text-sm text-${rec.estimatedEffort.toLowerCase() === 'high' ? 'red' : rec.estimatedEffort.toLowerCase() === 'medium' ? 'yellow' : 'green'}-600">
                ${rec.estimatedEffort}
              </p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    ${data.integrationOpportunities && data.integrationOpportunities.length > 0 ? `
    <!-- Integration Opportunities -->
    <div class="card">
      <div class="flex items-center gap-2 mb-4">
        <svg class="icon-sm text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
        <h2>Integration Opportunities</h2>
      </div>
      ${data.integrationOpportunities.map(opp => `
        <div class="rec-box">
          <div class="mb-3">
            <span class="badge badge-outline">${opp.integration}</span>
          </div>
          <div class="mb-3">
            <p class="text-xs text-slate-600 mb-1">Use Case</p>
            <p class="text-sm">${opp.useCase}</p>
          </div>
          <div>
            <p class="text-xs text-slate-600 mb-1">Business Impact</p>
            <p class="text-sm">${opp.businessImpact}</p>
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    ${data.nextSteps && data.nextSteps.length > 0 ? `
    <!-- Next Steps -->
    <div class="card">
      <div class="flex items-center gap-2 mb-4">
        <svg class="icon-sm text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
        <h2>Recommended Next Steps</h2>
      </div>
      ${data.nextSteps.map((step, index) => `
        <div class="flex items-start gap-3 mb-3">
          <span class="step-number">${index + 1}</span>
          <p>${step}</p>
        </div>
      `).join('')}
    </div>
    ` : ''}

    <!-- CTA Footer -->
    <div class="card card-dark">
      <h3 style="color: white;">Ready to Transform Your Integrations?</h3>
      <p class="footer-text mb-4">
        Our integration experts are ready to help you implement these recommendations and build a 
        more efficient, automated technology stack.
      </p>
      <button>Schedule a Consultation</button>
    </div>
  </div>
</body>
</html>`;

    // Create and download the HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `integration-recommendations-${companyName.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("HTML file downloaded!", {
      description: "Open the file in any browser to view your recommendations"
    });
  };

  return (
    <div ref={contentRef} data-pdf-content className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-slate-900">Your Integration Recommendations</h1>
            </div>
            <p className="text-slate-700 max-w-3xl">
              {data.executiveSummary}
            </p>
          </div>
          <div className="flex gap-2 ml-4">
            <Button
              onClick={handlePrint}
              variant="default"
              size="sm"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button
              onClick={handleDownloadReport}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              JSON
            </Button>
            <Button
              onClick={handleExportHTML}
              variant="outline"
              size="sm"
            >
              <FileCode className="w-4 h-4 mr-2" />
              HTML
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Wins */}
      {data.quickWins && data.quickWins.length > 0 && (
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-600" />
            <h2 className="text-slate-900">Quick Wins</h2>
          </div>
          <div className="grid gap-3">
            {data.quickWins.map((win, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-900 text-sm">{win}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Priority Recommendations */}
      <Card className="p-6 bg-white border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-blue-600" />
          <h2 className="text-slate-900">Priority Recommendations</h2>
        </div>
        <div className="space-y-4">
          {data.priorityRecommendations.map((rec, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-slate-900 flex-1">{rec.title}</h3>
                <div className="flex items-center gap-2 ml-4">
                  <Badge className={getPriorityColor(rec.priority)}>
                    {rec.priority} Priority
                  </Badge>
                </div>
              </div>
              
              <p className="text-slate-700 mb-4">{rec.description}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-600 mb-1">Expected Benefit</p>
                  <p className="text-sm text-slate-900">{rec.expectedBenefit}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 mb-1">Estimated Effort</p>
                  <p className={`text-sm ${getEffortColor(rec.estimatedEffort)}`}>
                    {rec.estimatedEffort}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Integration Opportunities */}
      {data.integrationOpportunities && data.integrationOpportunities.length > 0 && (
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-slate-900">Integration Opportunities</h2>
          </div>
          <div className="space-y-4">
            {data.integrationOpportunities.map((opp, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-white">
                    {opp.integration}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Use Case</p>
                    <p className="text-sm text-slate-900">{opp.useCase}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Business Impact</p>
                    <p className="text-sm text-slate-900">{opp.businessImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Next Steps */}
      {data.nextSteps && data.nextSteps.length > 0 && (
        <Card className="p-6 bg-white border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <ArrowRight className="w-5 h-5 text-blue-600" />
            <h2 className="text-slate-900">Recommended Next Steps</h2>
          </div>
          <div className="space-y-3">
            {data.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                  {index + 1}
                </div>
                <p className="text-slate-900 pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* CTA Footer */}
      <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white">
        <h3 className="text-white mb-2">Ready to Transform Your Integrations?</h3>
        <p className="text-slate-300 mb-4">
          Our integration experts are ready to help you implement these recommendations and build a 
          more efficient, automated technology stack.
        </p>
        <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
          Schedule a Consultation
        </Button>
      </Card>
    </div>
  );
}