const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const breweryRouter = require("./routers/breweryRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/brewery", breweryRouter);

module.exports = app;
