import { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, employeeId, email, phone, department, joiningDate, role } = req.body;

    try {
      // Check for duplicate Employee ID or Email
      const [existing]: any = await db.query(
        'SELECT * FROM employees WHERE employeeId = ? OR email = ?',
        [employeeId, email]
      );

      if (existing.length) {
        return res.status(400).json({ error: 'Employee ID or Email already exists' });
      }

      // Insert new employee
      await db.query(
        'INSERT INTO employees (name, employeeId, email, phone, department, joiningDate, role) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, employeeId, email, phone, department, joiningDate, role]
      );

      res.status(201).json({ message: 'Employee added successfully!' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Database Error:', error.message, error.stack);
        res.status(500).json({ error: 'Database error', details: error.message });
      } else {
        console.error('Unknown Error:', error);
        res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
