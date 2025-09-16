// Central configuration for environment variables
export const config = {
  // Supabase Configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || 'https://superbase.voyanero.com',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc1NDY2NDg0MCwiZXhwIjo0OTEwMzM4NDQwLCJyb2xlIjoiYW5vbiJ9.8eGew97HBhfKFe_8AlatMZtWM28f20INxx9Ez51pm90'
  },

  // Flask API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.voyanero.com',
    timeout: 30000, // 30 seconds
    retries: 3
  },

  // Application Configuration
  app: {
    name: 'Voyanero SaaS Portal',
    version: '1.0.0',
    environment: import.meta.env.VITE_NODE_ENV || 'production'
  },

  // Feature Flags
  features: {
    enableRealTimeUpdates: import.meta.env.VITE_ENABLE_REALTIME === 'true',
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false', // default true
    enableDebugMode: import.meta.env.VITE_DEBUG_MODE === 'true'
  }
}

// Helper function to check if we're in development mode
export const isDevelopment = () => config.app.environment === 'development'

// Helper function to check if we're in production mode
export const isProduction = () => config.app.environment === 'production'

// Helper function to get API URL with endpoint
export const getApiUrl = (endpoint = '') => {
  const baseUrl = config.api.baseUrl.replace(/\/$/, '') // Remove trailing slash
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${baseUrl}${cleanEndpoint}`
}

export default config

