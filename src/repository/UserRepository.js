import UserModel from "../dynamoose/UserModel";
import Random from "../utils/random";
import { isEmpty } from "../utils/validate";
export default class UserRepository {
  static addUser = async ({ email, password }) => {
    const id = Random.uuid();
    console.log(id);
    const user = new UserModel({ id, email, password });
    const response = await user.save();
    return response;
  };
  static addProgress = async ({ id, progress }) => {};
  static addGoal = async ({ id, goal }) => {
    const goals = await UserModel.get({ id });
    const response = UserModel.save({ id, goals: [...goals, goal] });
    return response;
  };
  static getGoals = async ({ id }) => {};
}
