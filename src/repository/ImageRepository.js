import Prompter from "../utils/openai";
import { isEmpty } from "../utils/validate";
export default class ImageRepository {
    static getImage = async ({ goal, count }) => {
        // const promptCount = isEmpty(count) || count > 10 ? 10 : count;
        const prompt = `Give me an accurate image to represent learning`;
        return await Prompter.getImage(prompt);
    }
}