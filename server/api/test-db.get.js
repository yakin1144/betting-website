import { getDatabaseConnection, testConnection } from '../utils/database'

export default defineEventHandler(async (event) => {
  try {
    const isConnected = await testConnection()
    
    if (isConnected) {
      return {
        status: 'success',
        message: 'Database connection established',
        timestamp: new Date().toISOString()
      }
    } else {
      return {
        status: 'error',
        message: 'Database connection failed',
        timestamp: new Date().toISOString()
      }
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'Database test failed',
      error: error.message,
      timestamp: new Date().toISOString()
    }
  }
})