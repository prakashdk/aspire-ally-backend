import { getGPTResponse } from "../utils/openai";
import { isEmpty } from "../utils/validate";
export default class GoalRepository {
  static getShortTermGoals = async ({ goal, count }) => {
    const response = await getGPTResponse(
      `Give me ${
        isEmpty(count) || count > 10 ? 10 : count
      } short term goals to acheive ${goal} as json with keys, topic and actions where topic should have the short term goal title and actions should be an array contains list of steps to achive the short term goal. Assign the list of short term goals to a key: short-term-goals`
    );
    const content = response.choices[0].message.content;
    if (content) return JSON.parse(content);
    else throw new Error("Invalid Request/Response. Please try again");
  };
}
