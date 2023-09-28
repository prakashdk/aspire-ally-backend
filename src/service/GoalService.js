import GoalRepository from "../repository/GoalRepository";
import Response from "../utils/response";
import { isEmpty } from "../utils/validate";

export default class GoalService {
  static getShortTermGoals = async (params) => {
    console.log(params);
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
  static getSteps = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.action)) {
        throw new Error("Action is either empty/invalid");
      }
      const response = await GoalRepository.getSteps(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
  static getTasks = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.step)) {
        throw new Error("Step is either empty/invalid");
      }
      const response = await GoalRepository.getTasks(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
  static getRelatedTechnologies = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.topic)) {
        throw new Error("Topic is either empty/invalid");
      }
      const response = await GoalRepository.getRelatedTechnologies(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
}
