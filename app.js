const express = require("express");
const tourRouter = require("./routers/tourRouter");

const app = express();

app.use("/api/v1/tours", tourRouter);

module.exports = app;
