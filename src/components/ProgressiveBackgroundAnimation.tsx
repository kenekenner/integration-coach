import { motion, AnimatePresence } from 'motion/react';
import { useMemo } from 'react';

interface ProgressiveBackgroundAnimationProps {
  currentStep: number;
  basicInfoFieldsCompleted?: number;
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
    type: string;
  }>;
}

// Color palette for dots
const DOT_COLORS = [
  '#4F46E5', // Indigo
  '#06B6D4', // Cyan
  '#10B981', // Green
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#3B82F6', // Blue
];

// Seeded random function for consistent positioning
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function ProgressiveBackgroundAnimation({
  currentStep,
  basicInfoFieldsCompleted = 0,
  selectedApps,
  integrations,
}: ProgressiveBackgroundAnimationProps) {
  
  // Flatten all selected apps into array with unique IDs
  const allApps = useMemo(() => {
    const apps: Array<{ 
      id: string;
      name: string; 
      category: string; 
      hasContext: boolean; 
      index: number;
    }> = [];
    let globalIndex = 0;
    
    Object.entries(selectedApps).forEach(([category, categoryApps]) => {
      categoryApps.forEach(app => {
        apps.push({
          id: `${category}::${app.name}`,
          name: app.name,
          category,
          hasContext: !!(app.context && app.context.trim()),
          index: globalIndex++,
        });
      });
    });
    
    return apps;
  }, [selectedApps]);

  // Generate positioned dots for apps
  const appDots = useMemo(() => {
    return allApps.map((app, idx) => {
      // Use app ID as seed for consistent positioning
      const seed = app.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      
      // Strategy: Position dots in edge zones to avoid the centered content card
      // Content card is typically centered with max-w-5xl (1024px)
      // On a 1440px+ screen, this leaves ~200px margins on each side
      
      // Divide screen into zones: left margin, top/bottom margins, right margin
      const zoneRandom = seededRandom(seed);
      let x, y;
      
      if (zoneRandom < 0.35) {
        // Left margin zone (0-25%)
        x = seededRandom(seed + 1) * 20 + 2; // 2-22%
        y = seededRandom(seed + 2) * 90 + 5; // 5-95%
      } else if (zoneRandom < 0.70) {
        // Right margin zone (75-100%)
        x = seededRandom(seed + 1) * 20 + 78; // 78-98%
        y = seededRandom(seed + 2) * 90 + 5; // 5-95%
      } else {
        // Top or bottom margin zones
        if (seededRandom(seed + 3) < 0.5) {
          // Top margin (0-20%)
          x = seededRandom(seed + 1) * 90 + 5; // 5-95%
          y = seededRandom(seed + 2) * 15 + 2; // 2-17%
        } else {
          // Bottom margin (80-100%)
          x = seededRandom(seed + 1) * 90 + 5; // 5-95%
          y = seededRandom(seed + 2) * 15 + 83; // 83-98%
        }
      }
      
      // Color based on index
      const color = DOT_COLORS[app.index % DOT_COLORS.length];
      
      return {
        id: app.id,
        x: `${x}%`,
        y: `${y}%`,
        color,
        hasContext: app.hasContext,
      };
    });
  }, [allApps]);

  // Generate connection lines for integrations
  const connectionLines = useMemo(() => {
    if (appDots.length < 2) return [];
    
    return integrations.map((integration, index) => {
      // Pick two random dots to connect (using integration index as seed)
      const seed = index * 1000 + integration.from.length + integration.to.length;
      const fromIndex = Math.floor(seededRandom(seed) * appDots.length);
      const toIndex = Math.floor(seededRandom(seed + 1) * appDots.length);
      
      // Make sure from and to are different
      const actualToIndex = fromIndex === toIndex 
        ? (toIndex + 1) % appDots.length 
        : toIndex;
      
      return {
        id: `line-${index}`,
        from: appDots[fromIndex],
        to: appDots[actualToIndex],
        color: DOT_COLORS[index % DOT_COLORS.length],
      };
    });
  }, [integrations, appDots]);

  const basicInfoProgress = Math.min(basicInfoFieldsCompleted / 6, 1);

  return (
    <>
      {/* Background layer - no background color so dots show in margins */}
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Step 0: Welcome - Simple centered glow */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(100px)',
            }}
          />
        )}

        {/* Step 1: Basic Info - Gradient morphing with progressive builds */}
        {currentStep === 1 && (
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* Main gradient blob that grows with progress */}
            <motion.div
              animate={{ 
                scale: 0.7 + (basicInfoProgress * 0.5),
                opacity: 0.08 + (basicInfoProgress * 0.08),
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                width: '700px',
                height: '700px',
                background: 'radial-gradient(circle, #4F46E5 0%, #06B6D4 50%, transparent 70%)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(120px)',
              }}
            />
            
            {/* Secondary blob that appears and morphs */}
            {basicInfoFieldsCompleted >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  scale: 0.6 + ((basicInfoFieldsCompleted - 2) / 4) * 0.4,
                  opacity: 0.06 + ((basicInfoFieldsCompleted - 2) / 4) * 0.06,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  width: '600px',
                  height: '600px',
                  background: 'radial-gradient(circle, #8B5CF6 0%, #EC4899 50%, transparent 70%)',
                  right: '20%',
                  bottom: '25%',
                  filter: 'blur(100px)',
                }}
              />
            )}
            
            {/* Third blob when almost complete */}
            {basicInfoFieldsCompleted >= 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  scale: 0.5 + ((basicInfoFieldsCompleted - 4) / 2) * 0.3,
                  opacity: 0.05 + ((basicInfoFieldsCompleted - 4) / 2) * 0.05,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  width: '500px',
                  height: '500px',
                  background: 'radial-gradient(circle, #10B981 0%, transparent 70%)',
                  left: '25%',
                  top: '20%',
                  filter: 'blur(90px)',
                }}
              />
            )}
          </div>
        )}

        {/* Step 2: ERP - Calm transition state */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.10 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              width: '700px',
              height: '700px',
              background: 'radial-gradient(circle, #10B981 0%, #06B6D4 50%, transparent 70%)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(120px)',
            }}
          />
        )}

        {/* Step 3: Tech Stack - Dim dots appear as apps are selected */}
        {currentStep >= 3 && (
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* Subtle background gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'absolute',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(140px)',
              }}
            />
            
            {/* Individual dots for each selected app */}
            <AnimatePresence>
              {appDots.map((dot) => {
                const isEnhanced = dot.hasContext && currentStep >= 4;
                
                return (
                  <motion.div
                    key={dot.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isEnhanced ? 1 : 0.9,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                      opacity: { duration: 0.4, ease: 'easeOut' },
                      scale: { duration: 0.3, ease: 'easeOut' },
                    }}
                    style={{
                      position: 'absolute',
                      left: dot.x,
                      top: dot.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Outer glow ring for enhanced dots */}
                    {isEnhanced && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: `2px solid ${dot.color}`,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    )}
                    
                    {/* Main dot - smaller when dim, larger when enhanced */}
                    <motion.div
                      animate={{
                        width: isEnhanced ? '20px' : '16px',
                        height: isEnhanced ? '20px' : '16px',
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        borderRadius: '50%',
                        background: dot.color,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: isEnhanced 
                          ? `0 0 24px ${dot.color}90, 0 0 48px ${dot.color}50`
                          : `0 0 16px ${dot.color}70, 0 0 32px ${dot.color}40`,
                      }}
                    />
                    
                    {/* Gradient glow behind each dot that extends into visible areas */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isEnhanced ? 0.35 : 0.25 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        position: 'absolute',
                        width: isEnhanced ? '220px' : '180px',
                        height: isEnhanced ? '220px' : '180px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${dot.color} 0%, transparent 70%)`,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(70px)',
                        zIndex: -1,
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Step 5+: Connection lines between dots */}
            {currentStep >= 5 && (
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              >
                <AnimatePresence>
                  {connectionLines.map((line, index) => {
                    // Parse percentage values
                    const x1 = parseFloat(line.from.x);
                    const y1 = parseFloat(line.from.y);
                    const x2 = parseFloat(line.to.x);
                    const y2 = parseFloat(line.to.y);
                    
                    return (
                      <motion.line
                        key={line.id}
                        initial={{ 
                          opacity: 0,
                          pathLength: 0,
                        }}
                        animate={{ 
                          opacity: 0.3,
                          pathLength: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: 'easeOut',
                          delay: index * 0.05,
                        }}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke={line.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{
                          filter: `drop-shadow(0 0 4px ${line.color}60)`,
                        }}
                      />
                    );
                  })}
                </AnimatePresence>
              </svg>
            )}
          </div>
        )}

        {/* Step 6: Pain Points - Maintain ecosystem with subtle energy */}
        {currentStep === 6 && (
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* Keep dots and lines visible, add energetic gradient */}
            <motion.div
              animate={{ 
                opacity: [0.08, 0.12, 0.08] as any,
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                width: '600px',
                height: '400px',
                background: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
                filter: 'blur(100px)',
                left: '20%',
                top: '30%',
              }}
            />
          </div>
        )}

        {/* Step 7: Review - Calm complete state */}
        {currentStep === 7 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              width: '900px',
              height: '900px',
              background: 'radial-gradient(circle, #10B981 0%, #06B6D4 40%, transparent 70%)',
              filter: 'blur(140px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}

        {/* Step 8: Thank You - Celebration */}
        {currentStep === 8 && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.18 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '1000px',
              height: '1000px',
              background: 'conic-gradient(from 0deg, #4F46E5, #10B981, #06B6D4, #8B5CF6, #EC4899, #4F46E5)',
              filter: 'blur(160px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </div>
    </>
  );
}
