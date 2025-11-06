import { useState } from 'react';
import { VisualizationOptionA } from './VisualizationOptionA';
import { VisualizationOptionB } from './VisualizationOptionB';
import { VisualizationOptionC } from './VisualizationOptionC';

export function VisualizationPreview() {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C'>('A');

  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      {/* Option selector */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-white rounded-full shadow-lg px-6 py-3 flex gap-4">
        <button
          onClick={() => setSelectedOption('A')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedOption === 'A' 
              ? 'bg-[#1C1C1C] text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Option A: Side Panel
        </button>
        <button
          onClick={() => setSelectedOption('B')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedOption === 'B' 
              ? 'bg-[#1C1C1C] text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Option B: Header Bar
        </button>
        <button
          onClick={() => setSelectedOption('C')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedOption === 'C' 
              ? 'bg-[#1C1C1C] text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Option C: Background Only
        </button>
      </div>

      {/* Render selected visualization */}
      {selectedOption === 'A' && <VisualizationOptionA />}
      {selectedOption === 'B' && <VisualizationOptionB />}
      {selectedOption === 'C' && <VisualizationOptionC />}

      {/* Mock content area to show how it looks with actual content */}
      <div className="relative z-10 pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="mb-4">Sample Content Card</h2>
            <p className="text-gray-600 mb-4">
              This is where your wizard steps would appear. The visualization overlay provides
              a constant visual reminder of the integration ecosystem being built.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Option A (Side Panel):</strong> Fixed panel on the right showing a vertical constellation map.
              Always visible, doesn't obstruct content, shows app names and stats.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Option B (Header Bar):</strong> Horizontal constellation in a header bar at the top.
              Compact, shows progress, hover for app names.
            </p>
            <p className="text-gray-600">
              <strong>Option C (Background Only):</strong> Simplified ambient gradient effects that pulse
              and morph. Subtle, doesn't add UI complexity, purely atmospheric.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="mb-4">Another Card</h2>
            <p className="text-gray-600">
              Notice how each option handles the space differently. The side panel reduces
              content width slightly. The header bar adds vertical space. The background
              option doesn't affect layout at all.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="mb-4">How It Works</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Step 3:</strong> Dots/orbs appear as you select apps</li>
              <li>• <strong>Step 4:</strong> Selected dots brighten/pulse when you add context</li>
              <li>• <strong>Step 5:</strong> Connection lines draw between dots as you add integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
