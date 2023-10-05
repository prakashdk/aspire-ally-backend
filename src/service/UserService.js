import { getAllGoals } from "../api/UserController";
import UserRepository from "../repository/UserRepository";
import Response from "../utils/response";
import { isEmpty } from "../utils/validate";

export default class UserService {
  static addUser = async (params) => {
    try {
      if (isEmpty(params?.email)) {
        throw new Error("Email is either empty/invalid");
      }
      const response = await UserRepository.addUser(params);
      return Response.ok(response);
    } catch (error) {
      console.log(error);
      return Response.error(error.message);
    }
  };
  static addGoal = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.id)) {
        throw new Error("Id is either empty/invalid");
      }
      const response = await UserRepository.addGoal(params);
      return Response.ok(response);
    } catch (error) {
      console.log(error);
      return Response.error(error.message);
    }
  };
  static getAllGoals = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.id)) {
        throw new Error("Id is either empty/invalid");
      }
      const response = await UserRepository.getAllGoals(params);
      return Response.ok(response);
    } catch (error) {
      console.log(error);
      return Response.error(error.message);
    }
  };
  static updateProgress = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.id)) {
        throw new Error("Id is either empty/invalid");
      }
      const response = await UserRepository.updateProgress(params);
      return Response.ok(response);
    } catch (error) {
      console.log(error);
      return Response.error(error.message);
    }
  };
}
