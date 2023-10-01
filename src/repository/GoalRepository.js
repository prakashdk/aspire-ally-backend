import Prompter from "../utils/openai";
import { isEmpty } from "../utils/validate";
export default class GoalRepository {
  static getShortTermGoals = async ({ goal, count }) => {
    // const promptCount = isEmpty(count) || count > 10 ? 10 : count;
    const format = {
      description: "",
      shortTermGoals: [
        {
          id: "",
          topic: "",
          actions: [],
          timeSpan: ""
        }
      ]
    }
    const prompt = `Give me short-term goals to achieve ${goal} as JSON with id - a random alphanumeric uuid, topics, actions and timeSpan as keys and add approximate time span to every short term goals. The actions should be self-explanatory. Add description about ${goal}. assign the final JSON output to a key shortTermGoals. The final response should be in JSON format: ${JSON.stringify(format)}`;
    return await Prompter.getGPTResponse(prompt);
  };
  static getSteps = async ({ action, count }) => {
    // const promptCount = isEmpty(count) || count > 5 ? 5 : count;
    const prompt = `Give me a clear explanation to ${action}. The final response should be in JSON format, with the keys being id - a random alphanumeric uuid,step, description, and timeSpan, where step should be a title and description should be clear, detailed, and self-explanatory in 7 lines, and each step should have the approximate time span that will be taken to complete the particular step. Add the documentation url as list in the particular step to a key: references. Assign the list of steps to a key: steps`;
    return await Prompter.getGPTResponse(prompt);
  };
  static getTasks = async ({ step, count }) => {
    // const promptCount = isEmpty(count) || count > 2 ? 2 : count;
    const prompt = `Give hands-on tasks to ${step}. The tasks should be hard, and the description should be clear, detailed, and self-explanatory. Give the response as JSON, where the keys are the id - a random alphanumeric uuid, topic, description, timeSpan and references. Assign the final JSON output to a key: tasks.`;
    return await Prompter.getGPTResponse(prompt);
  };
  static getRelatedTechnologies = async ({ topic, count }) => {
    // const promptCount = isEmpty(count) || count > 3 ? 3 : count;
    const prompt = `Give me the latest and trending technologies related to ${topic} as json where technologies should be an array. Assign the list of technologies to a key: technologies`;
    return await Prompter.getGPTResponse(prompt);
  };
  static getQuiz = async ({ topic, count }) => {
    const promptCount = isEmpty(count) || count > 5 ? 5 : count;
    const prompt = `Give me a set of ${promptCount} hard quizzes with options regarding ${topic}. The final response should be in JSON format, with id - a random alphanumeric uuid, questions, options should be key value pairs like A,B,C,D and answers as keys. Answer should have the key from options. Assign the final output to a key: quiz.`;
    return await Prompter.getGPTResponse(prompt);
  };
}
