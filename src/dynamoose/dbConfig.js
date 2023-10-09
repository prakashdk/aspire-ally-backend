import * as dynamoose from "dynamoose";

dynamoose.aws.ddb.local();

// if (process.env.IS_OFFLINE){

// }
// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
  },
  region: "us-east-1",
  endpoint:"http://localhost:8000"
});

// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);

export default dynamoose