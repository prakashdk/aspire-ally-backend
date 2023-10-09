import UserModel from "../model/User.model";
import Random from "../utils/random";

export default class UserRepository {
  static addUser = async ({ email, password }) => {
    const id = Random.uuid();
    console.log(id);
    const user = new UserModel({ id, email, password });
    const response = await user.save();
    return response;
  };
  static getUserById = async ({ id }) => {
    return await UserModel.get({ id });
  };
  static updateProgress = async ({ id, progress }) => {
    const response = await UserModel.update({ id, progress });
    return response;
  };
  static addGoal = async ({ id, goal }) => {
    const goals = await this.getAllGoals({ id });
    const allGoals = [...(goals.goals ?? []), goal ];
    const response = new UserModel({
      id,
      goals: JSON.stringify({ goals: allGoals }),
    }).save();
    return response;
  };
  static removeGoal = async ({ id, goalId }) => {
    const goals = await this.getAllGoals({ id });
    const allGoals = (goals.goals ?? []).filter((goal) => goal.id === goalId);
    const response = new UserModel({
      id,
      goals: JSON.stringify({ goals: allGoals }),
    }).save();
    return response;
  };
  static getAllGoals = async ({ id }) => {
    const user = await this.getUserById({ id });
    // return user?.goals?.map(goal=>JSON.parse(goal))
    return JSON.parse(user?.goals ?? '{"goals":[]}');
  };
}
