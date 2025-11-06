import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

interface Node {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  duration: number;
}

interface Connection {
  id: string;
  from: Node;
  to: Node;
  delay: number;
}

// Demo 1: Integration Network (Fixed)
const IntegrationNetwork = ({ itemCount }: { itemCount: number }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const prevCountRef = useRef(0);

  useEffect(() => {
    const colors = ['#4F46E5', '#06B6D4', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B'];
    
    if (itemCount > prevCountRef.current) {
      // Add new nodes
      const newNodes: Node[] = [];
      for (let i = prevCountRef.current; i < Math.min(itemCount, 25); i++) {
        newNodes.push({
          id: i,
          x: 15 + (Math.random() * 70),
          y: 15 + (Math.random() * 70),
          color: colors[i % colors.length],
          delay: i * 0.2,
          duration: 15 + Math.random() * 10,
        });
      }
      
      setNodes(prev => [...prev, ...newNodes]);
      
      // Add connections for new nodes
      const allNodes = [...nodes, ...newNodes];
      const newConnections: Connection[] = [];
      
      newNodes.forEach((newNode, idx) => {
        // Connect to previous node
        if (allNodes.length > 1) {
          const prevNode = allNodes[allNodes.length - newNodes.length + idx - 1] || allNodes[0];
          newConnections.push({
            id: `${prevNode.id}-${newNode.id}`,
            from: prevNode,
            to: newNode,
            delay: newNode.delay,
          });
        }
        
        // Occasionally connect to a random earlier node
        if (allNodes.length > 3 && Math.random() > 0.6) {
          const randomIdx = Math.floor(Math.random() * (allNodes.length - newNodes.length));
          const randomNode = allNodes[randomIdx];
          newConnections.push({
            id: `${randomNode.id}-${newNode.id}-alt`,
            from: randomNode,
            to: newNode,
            delay: newNode.delay + 0.2,
          });
        }
      });
      
      setConnections(prev => [...prev, ...newConnections]);
    } else if (itemCount < prevCountRef.current) {
      // Remove nodes
      const nodesToKeep = nodes.slice(0, itemCount);
      setNodes(nodesToKeep);
      
      // Remove connections that reference removed nodes
      const nodeIds = new Set(nodesToKeep.map(n => n.id));
      setConnections(prev => prev.filter(conn => 
        nodeIds.has(conn.from.id) && nodeIds.has(conn.to.id)
      ));
    }
    
    prevCountRef.current = itemCount;
  }, [itemCount]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn) => (
          <line
            key={conn.id}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="rgba(100, 100, 255, 0.15)"
            strokeWidth="1.5"
            className="animate-[fadeIn_0.6s_ease-out_forwards]"
            style={{ 
              animationDelay: `${conn.delay}s`,
              opacity: 0,
            }}
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <div
          key={`glow-${node.id}`}
          className="absolute rounded-full blur-xl animate-[fadeIn_0.6s_ease-out_forwards]"
          style={{
            left: `calc(${node.x}% - 30px)`,
            top: `calc(${node.y}% - 30px)`,
            width: '60px',
            height: '60px',
            backgroundColor: node.color,
            opacity: 0,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
      {nodes.map((node) => (
        <div
          key={`dot-${node.id}`}
          className="absolute rounded-full animate-[fadeIn_0.6s_ease-out_forwards]"
          style={{
            left: `calc(${node.x}% - 6px)`,
            top: `calc(${node.y}% - 6px)`,
            width: '12px',
            height: '12px',
            backgroundColor: node.color,
            opacity: 0,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Demo 2: Flowing Lines
const FlowingLines = ({ itemCount }: { itemCount: number }) => {
  const lines = Array.from({ length: Math.min(itemCount, 15) }, (_, i) => {
    const colors = ['#4F46E5', '#06B6D4', '#10B981', '#8B5CF6', '#EC4899'];
    return {
      id: i,
      color: colors[i % colors.length],
      y: 10 + (i * 70 / Math.min(itemCount, 15)),
      delay: i * 0.5,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-[2px] opacity-20 animate-flowRight"
          style={{
            top: `${line.y}%`,
            left: '-100%',
            width: '100%',
            background: `linear-gradient(90deg, transparent, ${line.color}, transparent)`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      {lines.map((line) => (
        <div
          key={`wave-${line.id}`}
          className="absolute h-[40px] opacity-10 blur-lg animate-flowRight"
          style={{
            top: `${line.y}%`,
            left: '-100%',
            width: '60%',
            background: `linear-gradient(90deg, transparent, ${line.color}, transparent)`,
            animationDelay: `${line.delay + 0.3}s`,
            animationDuration: '20s',
          }}
        />
      ))}
    </div>
  );
};

// Demo 3: Particle Accumulation
const ParticleAccumulation = ({ itemCount }: { itemCount: number }) => {
  const particles = Array.from({ length: Math.min(itemCount * 3, 50) }, (_, i) => {
    const colors = ['#4F46E5', '#06B6D4', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B'];
    return {
      id: i,
      x: 20 + (Math.random() * 60),
      color: colors[i % colors.length],
      delay: i * 0.2,
      duration: 8 + Math.random() * 4,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-40 animate-floatUp"
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            width: '8px',
            height: '8px',
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Demo 4: Gradient Morphing (Enhanced)
const GradientMorphing = ({ itemCount }: { itemCount: number }) => {
  const [blobs, setBlobs] = useState<Array<{
    id: number;
    from: string;
    to: string;
    initialX: number;
    initialY: number;
    delay: number;
    duration: number;
  }>>([]);
  const prevCountRef4 = useRef(0);

  useEffect(() => {
    const colorPairs = [
      { from: '#4F46E5', to: '#06B6D4' },
      { from: '#10B981', to: '#8B5CF6' },
      { from: '#EC4899', to: '#F59E0B' },
      { from: '#06B6D4', to: '#10B981' },
      { from: '#8B5CF6', to: '#4F46E5' },
      { from: '#F59E0B', to: '#EC4899' },
    ];
    
    if (itemCount > prevCountRef4.current) {
      const newBlobs = [];
      for (let i = prevCountRef4.current; i < Math.min(itemCount, 20); i++) {
        const colorPair = colorPairs[i % colorPairs.length];
        newBlobs.push({
          id: i,
          from: colorPair.from,
          to: colorPair.to,
          initialX: -20 + (Math.random() * 100),
          initialY: -20 + (Math.random() * 100),
          delay: i * 0.3,
          duration: 15 + Math.random() * 10,
        });
      }
      setBlobs(prev => [...prev, ...newBlobs]);
    } else if (itemCount < prevCountRef4.current) {
      setBlobs(prev => prev.slice(0, itemCount));
    }
    
    prevCountRef4.current = itemCount;
  }, [itemCount]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute blur-3xl animate-morphEnhanced"
          style={{
            width: '500px',
            height: '500px',
            background: `linear-gradient(135deg, ${blob.from}, ${blob.to})`,
            opacity: 0.12,
            animationDelay: `${blob.delay}s`,
            animationDuration: `${blob.duration}s`,
            left: `${blob.initialX}%`,
            top: `${blob.initialY}%`,
          }}
        />
      ))}
    </div>
  );
};

// Demo 5: Constellation Building
const ConstellationBuilding = ({ itemCount }: { itemCount: number }) => {
  const stars = Array.from({ length: Math.min(itemCount, 25) }, (_, i) => ({
    id: i,
    x: 15 + (Math.random() * 70),
    y: 15 + (Math.random() * 70),
    delay: i * 0.25,
  }));

  const constellationLines = stars.slice(0, -1).map((star, i) => {
    if (i % 3 === 0 && i + 3 < stars.length) {
      return { from: star, to: stars[i + 3] };
    } else if (i + 1 < stars.length) {
      return { from: star, to: stars[i + 1] };
    }
    return null;
  }).filter(Boolean);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {constellationLines.map((line, i) => line && (
          <line
            key={i}
            x1={`${line.from.x}%`}
            y1={`${line.from.y}%`}
            x2={`${line.to.x}%`}
            y2={`${line.to.y}%`}
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            className="animate-[fadeIn_1s_ease-in-out]"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          <div className="absolute inset-0 w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-40" />
        </div>
      ))}
    </div>
  );
};

export default function BackgroundAnimationDemo() {
  const [activeDemo, setActiveDemo] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(5);

  const demos = [
    { id: 1, name: 'Integration Network', component: IntegrationNetwork },
    { id: 2, name: 'Flowing Lines', component: FlowingLines },
    { id: 3, name: 'Particle Accumulation', component: ParticleAccumulation },
    { id: 4, name: 'Gradient Morphing', component: GradientMorphing },
    { id: 5, name: 'Constellation Building', component: ConstellationBuilding },
  ];

  const ActiveComponent = demos.find(d => d.id === activeDemo)?.component || IntegrationNetwork;

  return (
    <div className="min-h-screen bg-[#FBFBFB] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-2">Background Animation Concepts</h1>
        <p className="mb-8 opacity-60">Click to switch between concepts, add items to see how they build</p>
        
        {/* Demo selector */}
        <div className="flex flex-wrap gap-3 mb-6">
          {demos.map(demo => (
            <Button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              variant={activeDemo === demo.id ? 'default' : 'outline'}
            >
              {demo.name}
            </Button>
          ))}
        </div>

        {/* Item count control */}
        <div className="flex items-center gap-4 mb-8">
          <span>Items added: {itemCount}</span>
          <Button onClick={() => setItemCount(Math.max(1, itemCount - 1))} variant="outline">
            Remove Item
          </Button>
          <Button onClick={() => setItemCount(itemCount + 1)}>
            Add Item
          </Button>
          <Button onClick={() => setItemCount(5)} variant="outline">
            Reset
          </Button>
        </div>

        {/* Demo container */}
        <div className="relative bg-[#FBFBFB] rounded-3xl overflow-hidden border border-black/5" style={{ height: '600px' }}>
          <ActiveComponent itemCount={itemCount} />
          
          {/* Sample content box to show how it looks with real UI */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-black/5 max-w-md">
              <h2 className="mb-4">Sample Content</h2>
              <p className="opacity-60 mb-6">This represents your main form container. The background animation would sit behind this.</p>
              <div className="space-y-3">
                <div className="h-10 bg-[#FBFBFB] rounded-xl" />
                <div className="h-10 bg-[#FBFBFB] rounded-xl" />
                <div className="h-10 bg-[#FBFBFB] rounded-xl w-2/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 p-6 bg-white rounded-2xl border border-black/5">
          <h3 className="mb-2">
            {demos.find(d => d.id === activeDemo)?.name}
          </h3>
          <p className="opacity-60">
            {activeDemo === 1 && 'Floating nodes with connecting lines that represent your growing integration ecosystem. Thematically relevant to iPaaS.'}
            {activeDemo === 2 && 'Flowing data streams that become more numerous as users add information. Suggests data flow and movement.'}
            {activeDemo === 3 && 'Particles that float upward and accumulate, creating a sense of building and growth.'}
            {activeDemo === 4 && 'Morphing gradient blobs that become more vibrant as more data is added. Very Apple-like and modern.'}
            {activeDemo === 5 && 'Stars that connect into constellation patterns, building a map of your technology universe.'}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -20px); }
          66% { transform: translate(-15px, 15px); }
        }
        @keyframes flowRight {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes floatUp {
          0% { bottom: -20px; opacity: 0; transform: translateX(0); }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { bottom: 110%; opacity: 0; transform: translateX(${Math.random() > 0.5 ? '' : '-'}30px); }
        }
        @keyframes morphEnhanced {
          0% { 
            transform: translate(0, 0) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: translate(100px, -80px) scale(1.3) rotate(90deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: translate(-50px, 120px) scale(0.8) rotate(180deg);
            border-radius: 70% 30% 50% 50% / 30% 70% 50% 60%;
          }
          75% { 
            transform: translate(-120px, -60px) scale(1.1) rotate(270deg);
            border-radius: 40% 70% 60% 30% / 70% 40% 60% 50%;
          }
          100% { 
            transform: translate(0, 0) scale(1) rotate(360deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.3; }
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.6; }
        }
        .animate-flowRight {
          animation: flowRight 15s linear infinite;
        }
        .animate-floatUp {
          animation: floatUp linear infinite;
        }
        .animate-morphEnhanced {
          animation: morphEnhanced ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
