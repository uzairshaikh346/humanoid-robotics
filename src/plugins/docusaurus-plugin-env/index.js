// src/plugins/docusaurus-plugin-env/index.js
const path = require('path');
const fs = require('fs');

// Load environment variables from .env files
function loadEnvFiles() {
  const envFiles = [
    '.env.local',
    '.env.development.local',
    '.env.development',
    '.env',
  ];

  for (const envFile of envFiles) {
    const envPath = path.resolve(process.cwd(), envFile);
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      envContent.split('\n').forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine && !trimmedLine.startsWith('#')) {
          const [key, ...valueParts] = trimmedLine.split('=');
          if (key && valueParts.length > 0) {
            const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
            if (!process.env[key.trim()]) {
              process.env[key.trim()] = value;
            }
          }
        }
      });
    }
  }
}

// Load env files when plugin is initialized
loadEnvFiles();

module.exports = function plugin(context, options) {
  return {
    name: 'docusaurus-plugin-env',
    
    configureWebpack(config, isServer, utils) {
      // Expose environment variables to the client
      const env = {};
      
      // Add Supabase environment variables
      env.SUPABASE_URL = process.env.SUPABASE_URL || '';
      env.SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
      
      return {
        plugins: [
          new (require('webpack')).DefinePlugin({
            'process.env': JSON.stringify(env),
          }),
        ],
      };
    },
  };
};