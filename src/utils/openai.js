import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getGPTResponse = async (content) => {
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
const getImage = async (content) => {
  const response = await openai.images.generate({
    prompt: content,
  });
  const url = response?.data[0]?.url
  if (url) {
    try {
      return url;
    } catch (error) {
      throw new Error("Invalid response: " + url);
    }
  } else throw new Error("Invalid Request/Response. Please try again");
};

const Prompter = {
  getGPTResponse,
  getImage
}
export default Prompter