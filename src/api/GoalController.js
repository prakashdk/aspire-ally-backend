import GoalService from "../service/GoalService";

class GoalController {
  static getShortTermGoals(event) {
    const goal = event?.queryStringParameters?.goal;
    const count = event?.queryStringParameters?.count;
    return GoalService.getShortTermGoals({goal,count});
  }
  static getStepsForShortTermActions(event) {
    const action = event?.queryStringParameters?.action;
    const count = event?.queryStringParameters?.count;
    return GoalService.getSteps({action,count});
  }
  static getTasksForSteps(event) {
    const step = event?.queryStringParameters?.step;
    const count = event?.queryStringParameters?.count;
    return GoalService.getTasks({step,count});
  }
  static getRelatedTechnologies(event) {
    const topic = event?.queryStringParameters?.topic;
    const count = event?.queryStringParameters?.count;
    return GoalService.getRelatedTechnologies({topic,count});
  }
}

export const getShortTermGoals = GoalController.getShortTermGoals;
export const getSteps = GoalController.getStepsForShortTermActions;
export const getRelatedTechnologies = GoalController.getRelatedTechnologies;
export const getTasks = GoalController.getTasksForSteps;
