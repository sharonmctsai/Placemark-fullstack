const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port provided by Heroku or default to 3000



// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
