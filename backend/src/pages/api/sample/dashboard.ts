import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";


type Data = {
  answer: any;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});




export default async function handler(_req: NextApiRequest, res: NextApiResponse<any>) {

//   const response = await openai.chat.completions.create({
//   model: "gpt-4",
//   messages: [
//     {
//       "role": "system",
//       "content": "system"
//     },
//     {
//       "role": "user",
//       "content": "i'm hungry"
//     },
    
//   ],

//   temperature: 1,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });


  // const { rows } = await sql`SELECT * FROM "todolist" WHERE "user_id" = 1;`;
  const { rows } = await sql`SELECT * FROM screentime WHERE user_id = 1;`;

  
  // console.log(response.choices[0]);
  // console.log(rows);
  res.status(200).json({
    answer: rows,
  });
}
