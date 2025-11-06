import { motion } from 'motion/react';

// Option B: Header bar with horizontal constellation
export function VisualizationOptionB() {
  // Mock data for preview
  const mockApps = [
    { id: '1', name: 'Shopify', color: '#6366f1', hasContext: true },
    { id: '2', name: 'NetSuite', color: '#ec4899', hasContext: false },
    { id: '3', name: 'Salesforce', color: '#8b5cf6', hasContext: true },
    { id: '4', name: 'Stripe', color: '#06b6d4', hasContext: false },
    { id: '5', name: 'Zendesk', color: '#f59e0b', hasContext: true },
    { id: '6', name: 'HubSpot', color: '#10b981', hasContext: false },
  ];

  const mockIntegrations = [
    { from: '1', to: '2' },
    { from: '3', to: '4' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-24 bg-black/95 backdrop-blur-xl border-b border-white/10 px-8 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className="text-white">{mockApps.length} Apps</div>
          <div className="text-white/40">|</div>
          <div className="text-white">{mockIntegrations.length} Integrations</div>
        </div>

        {/* Horizontal constellation */}
        <div className="flex-1 max-w-2xl mx-8 relative h-12">
          <svg className="absolute inset-0 w-full h-full">
            {/* Connection lines */}
            {mockIntegrations.map((int, idx) => {
              const fromIdx = mockApps.findIndex(a => a.id === int.from);
              const toIdx = mockApps.findIndex(a => a.id === int.to);
              const fromX = 50 + fromIdx * 100;
              const toX = 50 + toIdx * 100;
              
              return (
                <motion.line
                  key={idx}
                  x1={fromX}
                  y1="24"
                  x2={toX}
                  y2="24"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                />
              );
            })}
          </svg>

          {/* App nodes */}
          {mockApps.map((app, idx) => (
            <motion.div
              key={app.id}
              className="absolute top-1/2 -translate-y-1/2 group"
              style={{ left: `${50 + idx * 100}px` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.08 }}
            >
              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full cursor-pointer"
                style={{ backgroundColor: app.color }}
                animate={{
                  boxShadow: app.hasContext 
                    ? `0 0 16px ${app.color}` 
                    : `0 0 6px ${app.color}`,
                }}
                whileHover={{ scale: 1.5 }}
              />
              
              {/* Tooltip on hover */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {app.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context indicator */}
        <div className="text-white/60 text-sm">
          {mockApps.filter(a => a.hasContext).length} with context
        </div>
      </div>
    </div>
  );
}
