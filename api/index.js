require("dotenv").config(); // optional

const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first deployed serverless function!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send(
    "<input type='text' placeholder='Enter your name'><button>Submit</button>"
  );
});

// Do NOT use app.listen(...). Instead export:
module.exports = app;
module.exports.handler = serverless(app);
