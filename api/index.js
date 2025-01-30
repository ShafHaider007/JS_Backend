require("dotenv").config(); // optional

const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Single route that returns a styled HTML page
app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>My Stylish Single Page</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f0f0f0;
        }
        header {
          background: #333;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        main {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1, h2 {
          color: #333;
          margin-top: 0;
        }
        p {
          line-height: 1.6;
          color: #555;
        }
        a.button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          margin-top: 1rem;
          color: #fff;
          background-color: #0070f3;
          border-radius: 4px;
          text-decoration: none;
        }
        a.button:hover {
          background-color: #005ed0;
        }
        footer {
          text-align: center;
          color: #777;
          margin: 2rem 0;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Welcome to My Single Page</h1>
      </header>
      <main>
        <h2>About This Page</h2>
        <p>
          This is a sample single-page response served by an Express server running on Vercel (serverless). 
          You can customize the layout, fonts, colors, and add more sections as needed.
        </p>
        <p>
          Feel free to navigate around or modify the content to fit your project.
        </p>
        <a href="https://www.example.com" target="_blank" class="button">Learn More</a>
      </main>
      <footer>
        &copy; ${new Date().getFullYear()} My Express App — All rights reserved.
      </footer>
    </body>
  </html>
  `;
  res.send(html);
});

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);
