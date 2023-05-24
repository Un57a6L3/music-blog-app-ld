import mysql2 from "mysql2"
import 'dotenv/config'

export const db = mysql2.createConnection({
  host:"localhost",
  user:"root",
  password: process.env.DB_KEY,
  database:"musicblog"
})