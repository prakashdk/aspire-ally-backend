import * as dynamoose from "dynamoose";

const TaskModel = dynamoose.model("Task", {
  id: String,
  tasks: [Object],
});
export default TaskModel;
