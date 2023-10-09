import * as dynamoose from "dynamoose";

const GoalModel = dynamoose.model(TABLE_NAME, {
  id: String,
  title: String,
  image: String,
  description: String,
  progress: Number,
  shortTermGoals: [Object],
});
export default GoalModel;
