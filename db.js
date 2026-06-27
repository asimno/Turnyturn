// db.js
import postgres from 'postgres'
const connectionString = process.env.POSTGRES_PASSWORD
const sql = postgres(connectionString)
export default sql