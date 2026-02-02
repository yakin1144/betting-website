export default defineNuxtConfig({
  // Disable SSR to properly load external content
  ssr: false,
  
  // App configuration
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NUXT_APP_CDN_URL
  },
  
  // Build configuration for server deployment
  nitro: {
    preset: 'node-server'
  },
  
  // Modules
  modules: [
    // Add your modules here
  ],
  
  // Runtime config
  runtimeConfig: {
    // Private keys are only available on the server
    mongodbUri: process.env.MONGODB_URI,
    postgresUrl: process.env.POSTGRES_URL,
    postgresUser: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: process.env.POSTGRES_PORT,
    postgresDatabase: process.env.POSTGRES_DATABASE,
    
    // Public keys are also exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  
  // CSS
  css: [
    // Add your CSS files here
  ],
  
  // Build configuration
  build: {
    transpile: [
      // Add packages that need transpilation
    ]
  }
})