import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a MySQL connection pool using environment variables
const db = mysql.createPool({
  host: process.env.DB_HOST,          // Get from .env
  user: process.env.DB_USER,          // Get from .env
  password: process.env.DB_PASSWORD,  // Get from .env
  database: process.env.DB_NAME,      // Get from .env
});

export default db;
