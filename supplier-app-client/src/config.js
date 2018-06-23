export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "supplier-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://r37zdbv5ta.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ECL8IZghT",
    APP_CLIENT_ID: "3qt33ps0jjcbaktnhamned7grf",
    IDENTITY_POOL_ID: "us-east-1:d16ca28e-dde0-4d7d-9700-f6e1d0bf069a"
  }
};
