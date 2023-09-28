import { getGPTResponse } from "../utils/openai";
import { isEmpty } from "../utils/validate";
export default class GoalRepository {
  static getShortTermGoals = async ({ goal, count }) => {
    const promptCount = isEmpty(count) || count > 10 ? 10 : count;
    const prompt = `Give me ${promptCount} short term goals to acheive ${goal} as json with keys, topic, actions and time where topic should have the short term goal title, actions should be an array contains list of steps to achive the short term goal, time should have the approximate time span that will be taken to complete the particular short term goal along with all the actions. Assign the list of short term goals to a key: shortTermGoals.`;
    return await getGPTResponse(prompt);
  };
  static getSteps = async ({ action, count }) => {
    const promptCount = isEmpty(count) || count > 5 ? 5 : count;
    const prompt = `Give me ${promptCount} steps as json with detailed explanation to ${action} with keys step, explanation and time where step should be a string with explanation and time should have the approximate time span that will be taken to complete the particular step. Assign the list of steps to a key: steps`;
    return await getGPTResponse(prompt);
  };
  static getTasks = async ({ step, count }) => {
    const promptCount = isEmpty(count) || count > 2 ? 2 : count;
    const prompt = `Give me ${promptCount} tasks as json with detailed explanation for ${step} with keys task, explanation and time where task should be a string with explanation and time should have the approximate time span that will be taken to complete the particular step. Assign the list of tasks to a key: tasks`;
    return await getGPTResponse(prompt);
  };
  static getRelatedTechnologies = async ({ topic, count }) => {
    const promptCount = isEmpty(count) || count > 3 ? 3 : count;
    const prompt = `Give me the latest and trending ${promptCount} technologies related to ${topic} as json where technologies should be an array. Assign the list of technologies to a key: technologies`;
    return await getGPTResponse(prompt);
  };
}
