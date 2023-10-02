import TechUpdateService from "../service/TechUpdateService";

class TechUpdateController {
  static getLatestTechNews(event) {
    const goal = event?.queryStringParameters?.goal;
    return TechUpdateService.getLatestTechNews({goal});
  }

  static getLatestTechContent(event) {
    const goal = event?.queryStringParameters?.goal;
    return TechUpdateService.getLatestTechContent({goal});
  }

  static getLatestTechContentFromGoals(event) {
    const goals = event?.queryStringParameters?.goals;
    return TechUpdateService.getLatestTechContentFromGoals({goals});
  }

  static getLatestTechNewsFromGoals(event) {
    const goals = event?.queryStringParameters?.goals;
    return TechUpdateService.getLatestTechNewsFromGoals({goals});
  }
}

export const getLatestTechNews = TechUpdateController.getLatestTechNews;
export const getLatestTechContent = TechUpdateController.getLatestTechContent;
export const getLatestTechContentFromGoals = TechUpdateController.getLatestTechContentFromGoals;
export const getLatestTechNewsFromGoals = TechUpdateController.getLatestTechNewsFromGoals;
