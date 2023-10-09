import UserService from "../service/UserService";

class UserController {
  static addUser(event) {
    const params = event?.body;
    return UserService.addUser(JSON.parse(params));
  }
  static addGoal(event) {
    const id = event?.pathParameters?.id;
    const { goal } = JSON.parse(event?.body);
    return UserService.addGoal({ id, goal });
  }
  static getAllGoals(event) {
    const id = event?.pathParameters?.id;
    return UserService.getAllGoals({id});
  }
  static updateProgress(event) {
    const id = event?.pathParameters?.id;
    const goalId = event?.pathParameters?.goalId;
    const { goal } = JSON.parse(event?.body);
    return UserService.updateProgress({ id, goalId, goal });
  }
  static getTask(event) {
    const id = event?.pathParameters?.id;
    const taskId = event?.pathParameters?.taskId;
    const { goal } = JSON.parse(event?.body);
    return UserService.updateProgress({ id, goalId, goal });
  }
  static addTask(event) {
    const shortTermGoalId = event?.pathParameters?.shortTermGoalId;
    const actionId = event?.pathParameters?.actionId;
    const goalId = event?.pathParameters?.goalId;
    const { goal } = JSON.parse(event?.body);
    return UserService.updateProgress({ id, goalId, goal });
  }
  // static (event) {
  //   const id = event?.pathParameters?.id;
  //   const goalId = event?.pathParameters?.goalId;
  //   const { goal } = JSON.parse(event?.body);
  //   return UserService.updateProgress({ id, goalId, goal });
  // }
}

export const addGoal = UserController.addGoal;
export const addUser = UserController.addUser;
export const getAllGoals = UserController.getAllGoals;
export const updateProgress = UserController.updateProgress;
