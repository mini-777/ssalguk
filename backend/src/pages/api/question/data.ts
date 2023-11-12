import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log(req.body);

    

      // PostgreSQL 쿼리 실행
      // const { rows } = await sql`INSERT INTO question (user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES ()`;


      
    
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}