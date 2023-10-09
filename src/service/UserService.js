import { getAllGoals } from "../api/UserController";
import UserRepository from "../repository/UserRepository";
import Response from "../utils/response";
import { isEmpty } from "../utils/validate";

export default class UserService {
  static addUser = async (params) => {
    const {email,password}=params
    try {
      if (isEmpty(email)|| isEmpty(password)) {
        throw new Error("Email/Password is either empty");
      }
      const response = await UserRepository.addUser(params);
      return Response.ok(response);
    } catch (error) {
      console.log(error);
      return Response.error(error.message);
    }
  };
  static addGoal = async (params) => {
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
