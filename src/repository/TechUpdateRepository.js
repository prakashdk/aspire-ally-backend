import Prompter from "../utils/openai";
import { scrapeTechNews, scrapeTechUpdates, scrapeTechUpdatesV2, scrapeTechNewsV2 } from "../utils/scrapeTechNews";

export default class TechUpdateRepository {
  static getTechfromGoal = async (goal) => {
    const prompt = `Give me what is the single major technology used to achieve the goal ${goal} as a json output with a key as techName and don't add additional text`
    const result = await Prompter.getGPTResponse(prompt)
    return result.techName;
  }

  static getTechfromGoals = async (goals) => {
    // const prompt = `Give me a json output with key as techNames and value as list of what is the single major technology used to achieve the goals provided here "${goals}" that is separated by ; and don't add additional text`
    const prompt = `Give me what is the respective single major technology used to achieve the goals ${goals} as an array and assign it to a json output with a key as techNames and please don't add additional text`;
    const result = await Prompter.getGPTResponse(prompt)
    return result.techNames;
  }

  static getLatestTechNews = async ({ goal }) => {
    const technology = await this.getTechfromGoal(goal)
    console.log("Technology used", technology)

    return await scrapeTechNews(technology);
    
  };

  static getLatestTechNewsFromGoals = async ({ goals }) => {
    const technology = await this.getTechfromGoals(goals)
    console.log("Technology used", technology)

    return await scrapeTechNewsV2(technology);
    
  };

  static getLatestTechContent = async ({goal}) => {
    const technology = await this.getTechfromGoal(goal);
    let techUpdates = await scrapeTechUpdates(technology);
    const techContent = techUpdates.techUpdateResults.pageContent;
    const prompt = `Give me a short 5 points summary related to new updates and announcement as a blog from the given content "${techContent}" and should assign the summary result into a JSON output with updateSummary as a key. Do not include any explanations, only provide a  RFC8259 compliant JSON response  following this format without deviation. {"updateSummary" : "summary of the content" }`;
    const summary = await Prompter.getGPTResponse(prompt);
    delete techUpdates.techUpdateResults.pageContent;

    techUpdates.techUpdateResults["techSummary"] = summary.hasOwnProperty('updateSummary') ? summary.updateSummary : summary

    return techUpdates

  };

  static getLatestTechContentFromGoals = async ({goals}) => {
    const technology = await this.getTechfromGoals(goals);
    console.log("Fetched ", technology)
    const techUpdates = JSON.stringify( await scrapeTechUpdatesV2(technology) );
    const prompt = `Give me a 5 line short summary of the HtmlContent in the following JSON ${techUpdates} which has techUpdateResults as parent key and iterate over the values and use htmlContent key to take the content. After summarising Replace htmlContent key's value with the summarised content and return with same JSON input and don't add additional text`;
    return await Prompter.getGPTResponse(prompt)
  };

}