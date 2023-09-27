export default class Response {
  headers = {
    "Access-Control-Allow-Origin": "example.domain.com",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  };

  static ok = (response) => {
    return {
      statusCode: 200,
      headers: this.headers,
      body: JSON.stringify({ response }),
    };
  };

  static error = (error) => {
    return {
      statusCode: 500,
      headers: this.headers,
      body: JSON.stringify({ error }),
    };
  };
  static notFound = (error) => {
    return {
      statusCode: 404,
      headers: this.headers,
      body: JSON.stringify({ error }),
    };
  };
}
