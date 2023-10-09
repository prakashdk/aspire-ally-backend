import { TABLE_NAME } from "../constants/constants";
import dynamoose from "../dynamoose/dbConfig";

// const ShortTermGoalSchema = new dynamoose.Schema({
//   id: String,
//   topic: String,
//   actions: [String],
//   timeSpan: String,
// });
// const GoalSchema = new dynamoose.Schema({
//   title: String,
//   progress: Number,
//   image: String,
//   description: String,
//   shortTermGoals: {
//     type: [Object],
//   },
// });
const ShortTermGoalSchema = new dynamoose.Schema({
  id: String,
  topic: String,
  actions: [String],
  timeSpan: String,
});
const GoalSchema = new dynamoose.Schema({
  title: String,
  progress: Number,
  image: String,
  description: String,
  shortTermGoals: {
    type: [ShortTermGoalSchema], 
  },
});
const UserModel = dynamoose.model(TABLE_NAME, {
  id: {
    type: String,
    hashKey: true,
  },
  email: String,
  password: String,
  goals: String
});
export default UserModel;
