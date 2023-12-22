const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Define your credentials
const users = { 'mom': '2223' };

// Use the middleware for basic authentication
app.use(basicAuth({ users, challenge: true, unauthorizedResponse: 'Unauthorized' }));

// Your regular route handling goes here
app.get('/', (req, res) => {
  res.send('Hello, this is a protected page!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});