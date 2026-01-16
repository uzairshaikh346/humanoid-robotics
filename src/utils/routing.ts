import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Get the home page URL based on baseUrl configuration
 * This function can be used outside React components
 * @returns The home page URL (e.g., '/humanoid-robotics/')
 */
export function getHomePageUrl(): string {
  if (typeof window !== 'undefined') {
    // Try to get baseUrl from window if available (set by Docusaurus)
    const baseUrl = (window as any).__docusaurus?.baseUrl;
    if (baseUrl) {
      return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    }
    // Fallback: try to extract from current path
    const path = window.location.pathname;
    if (path.includes('/humanoid-robotics/')) {
      return '/humanoid-robotics/';
    }
  }
  // Default fallback
  return '/humanoid-robotics/';
}

/**
 * React hook to get the home page URL
 * @returns The home page URL (e.g., '/humanoid-robotics/')
 */
export function useHomePageUrl(): string {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl || '/';
  return baseUrl.endsWith('/humanoid-robotics/') ? baseUrl : `${baseUrl}/`;
}

/**
 * Get the full home page URL including origin
 * Useful for OAuth redirects
 * @returns The full home page URL (e.g., 'https://uzairshaikh346.github.io/humanoid-robotics/')
 */
export function getFullHomePageUrl(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  const origin = window.location.origin;
  const homePath = getHomePageUrl();
  return `${origin}${homePath}`;
}
