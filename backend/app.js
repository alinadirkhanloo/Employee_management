const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router =require('./server/routes');
// Set up the express app
const app = express();

// Log requstes to the console
app.use(logger("dev"));
// const router =require('./server/routes')

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/api/courses", (req, res) => {
//   console.log(req.body);
  
// });




app.use('/api',router);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

module.exports = app;
