import GoalRepository from "../repository/GoalRepository";
import ImageRepository from "../repository/ImageRepository";
import UserRepository from "../repository/UserRepository";
import Random from "../utils/random";
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
      const image = await ImageRepository.getImage(params);
      const goal = {
        title: params.goal,
        progress: 0,
        image,
        ...response,
      };
      const dbResponse = await UserRepository.addGoal({ id: params.id, goal });
      return Response.ok(goal);
    } catch (error) {
      console.log(error);
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
  static getQuiz = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.topic)) {
        throw new Error("Topic is either empty/invalid");
      }
      const response = await GoalRepository.getQuiz(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
  static getQuotes = async () => {
    try {
      const response = await GoalRepository.getQuotes();
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
}
