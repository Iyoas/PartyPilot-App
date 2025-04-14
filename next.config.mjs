/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['nl', 'en'],      // Je ondersteunt 2 talen
      defaultLocale: 'nl',        // Alles draait op NL
      localeDetection: false,     // Geen automatische redirect op basis van browsertaal
    },
  };
  
  export default nextConfig;
  