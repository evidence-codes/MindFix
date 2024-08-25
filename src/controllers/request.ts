import { Request, Response } from "express";
import openai from "../config/config";
import input from "../doc/data.json";

const request = async (req: Request, res: Response) => {
  const { message, history_data } = req.body;
  console.log(message);
  console.log(history_data);

  const messages = history_data.concat([
    {
      role: "user",
      content: `${input.input} ${history_data} Answer the question below based on the data above: '${message}'`,
    },
  ]);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `${input.input} ${history_data} Answer the question below based on the data above: '${message}'`,
      },
    ],
  });

  return res
    .status(200)
    .json({ reply: response.data.choices[0].message?.content });
};

export default request;
