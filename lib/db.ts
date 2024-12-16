import mysql from 'mysql2';

// Create a connection pool
let pool: mysql.Pool | null = null;

const getDbConnection = (): mysql.Pool => {
  if (!pool) {
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL, // If using a single URL for connection (e.g., Railway)
      // Alternatively, use the individual configurations:
      // host: 'localhost',
      // user: 'root',
      // password: 'password',
      // database: 'your_database_name',
    });
  }
  
  return pool;
};

export default getDbConnection;
