// api/index.js
require("dotenv").config(); // optional if you're using environment variables

const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send(
    "<input type='text' placeholder='Enter your name'><button>Submit</button>"
  );
});

// Instead of app.listen(...), export the serverless handler
module.exports = app;
module.exports.handler = serverless(app);
