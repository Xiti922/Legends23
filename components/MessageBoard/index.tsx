import { MatrixClient } from "matrix-js-sdk";


// Set up the Matrix client with your API key and server URL
const client = new MatrixClient({
  baseUrl: "https://matrix.org",
  accessToken: "your-access-token",
  userId: "your-user-id",
});

// Connect to the server
client.startClient();

