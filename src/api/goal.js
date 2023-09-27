import GoalService from "../service/GoalService";

class GoalController {
  static getShortTermGoals(event) {
    // Modify the method to `GET` and get goal as path/query parameter
    const goal = event?.queryStringParameters?.goal;
    const count = event?.queryStringParameters?.count;
    return GoalService.getShortTermGoals({goal,count});
  }
}

export const getShortTermGoals = GoalController.getShortTermGoals;
