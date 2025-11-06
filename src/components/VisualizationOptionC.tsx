import { motion } from 'motion/react';

// Option C: Simplified background with just gradient effects (no dots)
export function VisualizationOptionC() {
  // Mock data for preview
  const mockApps = [
    { color: '#6366f1' },
    { color: '#ec4899' },
    { color: '#8b5cf6' },
    { color: '#06b6d4' },
    { color: '#f59e0b' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient blobs that grow and morph as user progresses */}
      
      {/* Base ambient gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Dynamic gradient orbs that appear as apps are selected */}
      {mockApps.map((app, idx) => {
        const positions = [
          { x: '10%', y: '20%' },
          { x: '85%', y: '15%' },
          { x: '15%', y: '75%' },
          { x: '90%', y: '80%' },
          { x: '50%', y: '10%' },
        ];
        
        return (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              left: positions[idx].x,
              top: positions[idx].y,
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${app.color} 0%, transparent 70%)`,
              filter: 'blur(80px)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              delay: idx * 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        );
      })}

      {/* Subtle animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}
