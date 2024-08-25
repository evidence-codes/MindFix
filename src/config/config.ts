import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY || "";

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai_config = new OpenAIApi(configuration);

export default openai_config;
