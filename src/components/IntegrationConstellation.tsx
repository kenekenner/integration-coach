import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';

interface App {
  id: string;
  name: string;
  color: string;
  hasContext: boolean;
  category: string;
  position: { x: number; y: number };
}

interface Integration {
  from: string;
  to: string;
}

interface IntegrationConstellationProps {
  selectedApps: {
    [category: string]: Array<{
      name: string;
      context?: string;
      isCustom?: boolean;
    }>;
  };
  integrations: Array<{
    from: string;
    to: string;
    type: 'native' | 'prebuilt' | 'custom' | 'manual';
  }>;
  erpSystems?: string[];
  currentStep: number;
}

// Color palette for dots
const APP_COLORS = [
  '#6366f1', // indigo
  '#ec4899', // pink
  '#8b5cf6', // purple
  '#06b6d4', // cyan
  '#f59e0b', // amber
  '#10b981', // emerald
  '#ef4444', // red
  '#3b82f6', // blue
  '#a855f7', // violet
  '#14b8a6', // teal
];

// Generate random position that avoids the center content area
function generateRandomPosition(index: number): { x: number; y: number } {
  // Use seeded random based on index for consistent positioning
  const seed1 = index * 9301 + 49297;
  const seed2 = index * 233 + 71;
  
  const random1 = Math.abs(Math.sin(seed1) * 10000) % 1;
  const random2 = Math.abs(Math.cos(seed2) * 10000) % 1;
  
  // Define safe zones (avoid center where content card is)
  // Content card is max-w-5xl (80rem = 1280px) centered, so avoid roughly 15-85% horizontal
  const zones = [
    { xMin: 2, xMax: 12, yMin: 10, yMax: 90 }, // Far left margin
    { xMin: 88, xMax: 98, yMin: 10, yMax: 90 }, // Far right margin
    { xMin: 12, xMax: 30, yMin: 5, yMax: 95 }, // Left side
    { xMin: 70, xMax: 88, yMin: 5, yMax: 95 }, // Right side
    { xMin: 30, xMax: 70, yMin: 75, yMax: 95 }, // Bottom area
  ];
  
  const zone = zones[index % zones.length];
  const x = zone.xMin + random1 * (zone.xMax - zone.xMin);
  const y = zone.yMin + random2 * (zone.yMax - zone.yMin);
  
  return { x, y };
}

export function IntegrationConstellation({
  selectedApps,
  integrations,
  erpSystems = [],
  currentStep,
}: IntegrationConstellationProps) {
  const [apps, setApps] = useState<App[]>([]);
  const [positionMap, setPositionMap] = useState<Map<string, { x: number; y: number }>>(new Map());

  useEffect(() => {
    // Convert selectedApps to flat array with metadata
    const allApps: App[] = [];
    const addedNames = new Set<string>(); // Track to prevent duplicates
    let colorIndex = 0;

    // Add ERP systems first
    erpSystems.forEach(erp => {
      if (!addedNames.has(erp)) {
        const appId = `erp-${erp}`;
        // Get existing position or generate new one
        const position = positionMap.get(appId) || generateRandomPosition(colorIndex);
        if (!positionMap.has(appId)) {
          setPositionMap(prev => new Map(prev).set(appId, position));
        }
        
        // Check if ERP has context in selectedApps
        let hasContext = false;
        Object.values(selectedApps).forEach(apps => {
          const erpApp = apps.find(a => a.name === erp);
          if (erpApp?.context && erpApp.context.trim()) {
            hasContext = true;
          }
        });
        
        allApps.push({
          id: appId,
          name: erp,
          color: APP_COLORS[colorIndex % APP_COLORS.length],
          hasContext,
          category: 'ERP',
          position,
        });
        addedNames.add(erp);
        colorIndex++;
      }
    });

    // Add apps from each category
    Object.entries(selectedApps).forEach(([category, apps]) => {
      apps.forEach(app => {
        if (!addedNames.has(app.name)) {
          const appId = `${category}-${app.name}`;
          // Get existing position or generate new one
          const position = positionMap.get(appId) || generateRandomPosition(colorIndex);
          if (!positionMap.has(appId)) {
            setPositionMap(prev => new Map(prev).set(appId, position));
          }
          
          allApps.push({
            id: appId,
            name: app.name,
            color: APP_COLORS[colorIndex % APP_COLORS.length],
            hasContext: !!(app.context && app.context.trim()),
            category,
            position,
          });
          addedNames.add(app.name);
          colorIndex++;
        }
      });
    });

    console.log('IntegrationConstellation - Total apps:', allApps.length, allApps.map(a => a.name));
    console.log('IntegrationConstellation - Integrations:', integrations);
    setApps(allApps);
  }, [selectedApps, erpSystems, integrations]);

  // Ambient orbs appear from the beginning (step 0 = welcome screen), constellation dots appear at step 3+
  const showAmbientOrbs = true; // Always show ambient background
  const showConstellation = currentStep >= 3 && apps.length > 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Ambient gradient orbs - subtle background motion */}
      {showAmbientOrbs && (
        <>
          {/* Base ambient gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* Dynamic gradient orbs */}
          {[
            { color: '#6366f1', x: '10%', y: '20%' },
            { color: '#ec4899', x: '85%', y: '15%' },
            { color: '#8b5cf6', x: '15%', y: '75%' },
            { color: '#06b6d4', x: '90%', y: '80%' },
            { color: '#f59e0b', x: '50%', y: '10%' },
          ].map((orb, idx) => (
            <motion.div
              key={`orb-${idx}`}
              className="absolute"
              style={{
                left: orb.x,
                top: orb.y,
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                filter: 'blur(80px)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                delay: idx * 0.3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}

          {/* Subtle animated mesh gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(236, 72, 153, 0.03) 50%, rgba(139, 92, 246, 0.03) 100%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </>
      )}

      {showConstellation && (
        <>
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Connection lines - only show on step 5+ */}
        {currentStep >= 5 && integrations.flatMap((integration, idx) => {
          // Parse "from" and "to" which can be "App1 / App2 / App3"
          const fromNames = integration.from.split(' / ').map(n => n.trim());
          const toNames = integration.to.split(' / ').map(n => n.trim());
          
          console.log('Processing integration:', { from: integration.from, to: integration.to, fromNames, toNames });
          
          // Find all matching apps for from and to
          const fromApps = fromNames.map(name => 
            apps.find(a => a.name === name)
          ).filter(Boolean) as App[];
          
          const toApps = toNames.map(name =>
            apps.find(a => a.name === name)
          ).filter(Boolean) as App[];
          
          console.log('Found apps:', { fromApps: fromApps.map(a => a.name), toApps: toApps.map(a => a.name) });
          
          // Create lines between all combinations
          const lines = [];
          let lineIndex = 0;
          for (const fromApp of fromApps) {
            for (const toApp of toApps) {
              console.log('Creating line:', { from: fromApp.name, to: toApp.name, fromPos: fromApp.position, toPos: toApp.position });
              lines.push(
                <motion.line
                  key={`${fromApp.id}-${toApp.id}-${idx}-${lineIndex}`}
                  x1={fromApp.position.x}
                  y1={fromApp.position.y}
                  x2={toApp.position.x}
                  y2={toApp.position.y}
                  stroke="rgba(28, 28, 28, 0.15)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                />
              );
              lineIndex++;
            }
          }
          
          console.log('Total lines created for integration:', lines.length);
          return lines;
        })}
      </svg>

      {/* App nodes */}
      {apps.map((app, index) => {
        // Enhanced glow on step 4+ when context is added
        const showEnhancedGlow = currentStep >= 4 && app.hasContext;
        
        return (
          <motion.div
            key={app.id}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `${app.position.x}%`,
              top: `${app.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: index * 0.03,
              type: 'spring',
              stiffness: 400,
              damping: 25,
            }}
          >
            {/* Dot with glow */}
            <motion.div
              className="relative"
              animate={{
                scale: showEnhancedGlow ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: showEnhancedGlow ? Infinity : 0,
                repeatType: 'reverse',
              }}
            >
              {/* Outer glow effect - only visible when context is added on step 4+ */}
              {showEnhancedGlow && (
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    backgroundColor: app.color,
                    width: '40px',
                    height: '40px',
                    margin: '-14px',
                  }}
                  animate={{
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              )}
              
              {/* Inner glow effect - always present but subtle */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: app.color,
                  width: showEnhancedGlow ? '24px' : '12px',
                  height: showEnhancedGlow ? '24px' : '12px',
                  margin: showEnhancedGlow ? '-8px' : '-2px',
                  filter: showEnhancedGlow ? 'blur(8px)' : 'blur(4px)',
                }}
                animate={{
                  opacity: showEnhancedGlow ? [0.4, 0.7, 0.4] : 0.15,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              {/* Main dot */}
              <motion.div
                className="relative rounded-full"
                style={{ 
                  backgroundColor: app.color,
                  width: showEnhancedGlow ? '12px' : '8px',
                  height: showEnhancedGlow ? '12px' : '8px',
                  margin: showEnhancedGlow ? '-2px' : '0',
                }}
                animate={{
                  width: showEnhancedGlow ? '12px' : '8px',
                  height: showEnhancedGlow ? '12px' : '8px',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* App name */}
            <motion.div
              className="text-[9px] text-[#1C1C1C]/50 whitespace-nowrap max-w-[70px] text-center leading-tight overflow-hidden text-ellipsis"
              initial={{ opacity: 0 }}
              animate={{ opacity: showEnhancedGlow ? 0.8 : 0.4 }}
              transition={{ delay: index * 0.03 + 0.15 }}
            >
              {app.name}
            </motion.div>
          </motion.div>
        );
      })}
      </>
      )}
    </div>
  );
}
