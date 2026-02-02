import postgres from 'postgres'

let sql

export function getDatabaseConnection() {
  if (!sql) {
    sql = postgres(process.env.POSTGRES_URL || {
      host: process.env.POSTGRES_HOST || 'dpg-d60dc9h4tr6s73bbdr9g-a.frankfurt-postgres.render.com',
      port: process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DATABASE || 'yakin',
      username: process.env.POSTGRES_USER || 'yakin',
      password: process.env.POSTGRES_PASSWORD || 'FldHcf75GTambWKRorCXdJ8lPwsKd2hO',
      ssl: 'require'
    })
  }
  return sql
}

// Test database connection
export async function testConnection() {
  try {
    const sql = getDatabaseConnection()
    const result = await sql`SELECT NOW()`
    console.log('Database connection successful:', result)
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}