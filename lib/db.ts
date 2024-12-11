import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',       // Replace with your host
  user: 'root',            // Replace with your username
  password: 'Priyanka03#',            // Replace with your password
  database: 'employee_management', // Replace with your database name
});

export default db;
