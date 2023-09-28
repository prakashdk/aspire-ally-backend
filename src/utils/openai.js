import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getGPTResponse = async (content) => {
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
  });
  const object = response?.choices[0]?.message?.content;
  console.log(object);
  if (object) {
    try {
      return JSON.parse(object);
    } catch (error) {
      throw new Error("Invalid response: " + object);
    }
  } else throw new Error("Invalid Request/Response. Please try again");
};
