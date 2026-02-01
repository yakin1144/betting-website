export default defineNuxtConfig({
  // Target: 'static' for static site generation
  ssr: false,
  
  // App configuration
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NUXT_APP_CDN_URL
  },
  
  // Build configuration
  nitro: {
    preset: 'static'
  },
  
  // Modules
  modules: [
    // Add your modules here
  ],
  
  // Runtime config
  runtimeConfig: {
    // Private keys are only available on the server
    mongodbUri: process.env.MONGODB_URI,
    
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