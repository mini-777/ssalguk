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
  const { rows } = await sql`SELECT * FROM todolist WHERE user_id = 1;`;
  console.log(rows)
  const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      "role": "system",
      "content": "system"
    },
    {
      "role": "user",
      "content": `뒤에 json파일을 확인하고 user에게 적합한 활동을 추천해줘 50자 이내로 추천해줘 ${JSON.stringify(rows)}`
    },
    
  ],

  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

  console.log(`뒤에 json파일을 확인하고 user에게 적합한 활동을 추천해줘 50자 이내로 추천해줘 ${JSON.stringify(rows)}`);

  // const { rows } = await sql`SELECT * FROM "todolist" WHERE "user_id" = 1;`;

  
  // console.log(response.choices[0]);
  // console.log(rows);
  res.status(200).json({
    answer: response.choices[0],
  });
}
