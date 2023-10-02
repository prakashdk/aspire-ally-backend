import TechUpdateRepository from "../repository/TechUpdateRepository";
import Response from "../utils/response";
import { isEmpty } from "../utils/validate";

//TODO
export default class TechUpdateService {
  static getLatestTechNews = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.goal)) {
        throw new Error("Goal is either empty/invalid");
      }
      const response = await TechUpdateRepository.getLatestTechNews(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };
  static getLatestTechContent = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.goal)) {
        throw new Error("Goal is either empty/invalid");
      }
      const response = await TechUpdateRepository.getLatestTechContent(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  };

  static getLatestTechContentFromGoals = async (params) => {
    console.log(params);
    try {
      if (isEmpty(params?.goals)) {
        throw new Error("Goals is either empty/invalid");
      }
      const response = await TechUpdateRepository.getLatestTechContentFromGoals(params);
      return Response.ok(response);
    } catch (error) {
      return Response.error(error.message);
    }
  }

  static getLatestTechNewsFromGoals = async (params) => {
    console.log(params);
    try {
        if (isEmpty(params?.goals)) {
          throw new Error("Goals is either empty/invalid");
        }
        const response = await TechUpdateRepository.getLatestTechNewsFromGoals(params);
        return Response.ok(response);
      } catch (error) {
        return Response.error(error.message);
      }
  }
}
