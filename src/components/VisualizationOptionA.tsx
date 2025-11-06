import { motion } from 'motion/react';

// Option A: Fixed Side Panel with constellation map
export function VisualizationOptionA() {
  // Mock data for preview
  const mockApps = [
    { id: '1', name: 'Shopify', color: '#6366f1', hasContext: true },
    { id: '2', name: 'NetSuite', color: '#ec4899', hasContext: false },
    { id: '3', name: 'Salesforce', color: '#8b5cf6', hasContext: true },
    { id: '4', name: 'Stripe', color: '#06b6d4', hasContext: false },
    { id: '5', name: 'Zendesk', color: '#f59e0b', hasContext: true },
  ];

  const mockIntegrations = [
    { from: '1', to: '2' },
    { from: '1', to: '4' },
  ];

  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 overflow-y-auto">
      <div className="text-white/60 text-sm mb-4">Integration Ecosystem</div>
      <div className="text-white mb-2">{mockApps.length} Apps Connected</div>
      <div className="text-white/40 text-xs mb-8">{mockIntegrations.length} Integrations Mapped</div>
      
      {/* Constellation visualization */}
      <div className="relative h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-xl p-4">
        <svg className="absolute inset-0 w-full h-full">
          {/* Connection lines */}
          {mockIntegrations.map((int, idx) => {
            const fromIdx = mockApps.findIndex(a => a.id === int.from);
            const toIdx = mockApps.findIndex(a => a.id === int.to);
            const fromY = 60 + fromIdx * 80;
            const toY = 60 + toIdx * 80;
            
            return (
              <motion.line
                key={idx}
                x1="40%"
                y1={fromY}
                x2="60%"
                y2={toY}
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
            className="absolute flex items-center gap-3"
            style={{
              left: idx % 2 === 0 ? '20%' : '50%',
              top: `${60 + idx * 80}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Dot */}
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: app.color }}
              animate={{
                boxShadow: app.hasContext 
                  ? `0 0 20px ${app.color}` 
                  : `0 0 8px ${app.color}`,
              }}
            />
            
            {/* Label */}
            <div className="text-white/80 text-xs">{app.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60">With Context</span>
          <span className="text-white">
            {mockApps.filter(a => a.hasContext).length}/{mockApps.length}
          </span>
        </div>
      </div>
    </div>
  );
}
