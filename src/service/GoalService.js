import GoalRepository from "../repository/GoalRepository";
import Response from "../utils/response";
import { isEmpty } from "../utils/validate";

export default class GoalService {
  static getShortTermGoals = async (params) => {
    try {
      if (isEmpty(params?.goal)) {
        throw new Error("Goal is either empty/invalid");
      }
      const response = await GoalRepository.getShortTermGoals(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
}
