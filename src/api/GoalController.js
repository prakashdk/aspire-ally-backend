import GoalService from "../service/GoalService";

class GoalController {
  static getShortTermGoals(event) {

    const id = event?.pathParameters?.id;
    const goal = event?.queryStringParameters?.goal;
    const count = event?.queryStringParameters?.count;
    return GoalService.getShortTermGoals({id,goal,count});
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
  static getQuiz(event) {
    const topic = event?.queryStringParameters?.topic;
    const count = event?.queryStringParameters?.count;
    return GoalService.getQuiz({topic,count});
  }
  static getQuotes(event) {
    return GoalService.getQuotes();
  }
}

export const getShortTermGoals = GoalController.getShortTermGoals;
export const getSteps = GoalController.getStepsForShortTermActions;
export const getRelatedTechnologies = GoalController.getRelatedTechnologies;
export const getTasks = GoalController.getTasksForSteps;
export const getQuiz = GoalController.getQuiz;
export const getQuotes = GoalController.getQuotes;
