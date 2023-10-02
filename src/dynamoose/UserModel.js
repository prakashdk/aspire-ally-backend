import * as dynamoose from "dynamoose";

const UserModel = dynamoose.model("User", {
  id: String,
  email: String,
  password: String,
  goals: [Object],
});
export default UserModel