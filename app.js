const express = require("express");
const app = express();
const bp = require('body-parser')

const AgentRouter = require("./routes/agentRoute");
app.use(bp.json())
var cors = require("cors");

const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
     // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use("/agents", cors(corsOptions), AgentRouter);

module.exports = app;