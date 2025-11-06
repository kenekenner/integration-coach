import { getAppLogoUrl } from './app-logo-map';

// Component to render app logo
export function AppLogo({ appName, size = 'md' }: { appName: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-12'
  };

  return (
    <img 
      src={getAppLogoUrl(appName)} 
      alt={appName}
      className={`${sizes[size]} max-w-full rounded flex-shrink-0 object-contain`}
      onError={(e) => {
        // If logo fails to load, fall back to placeholder
        const target = e.target as HTMLImageElement;
        if (!target.src.startsWith('data:')) {
          const hash = appName.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
          }, 0);
          
          const hue = Math.abs(hash) % 360;
          
          const initials = appName
            .split(/[\s\-\(\)]/)
            .filter(word => word.length > 0)
            .slice(0, 2)
            .map(word => word[0].toUpperCase())
            .join('');

          const svg = `
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="hsl(${hue}, 70%, 55%)"/>
              <text x="16" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="white" text-anchor="middle">${initials}</text>
            </svg>
          `;
          
          target.src = `data:image/svg+xml;base64,${btoa(svg)}`;
        }
      }}
    />
  );
}

export function getAppLogo(appName: string): string {
  return getAppLogoUrl(appName);
}
