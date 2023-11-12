import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log(req.body);

    

      // PostgreSQL 쿼리 실행

      const { rows } = await sql`SELECT * FROM dofarming WHERE user_id = ${req.body.user_id};`;

      
      console.log(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}