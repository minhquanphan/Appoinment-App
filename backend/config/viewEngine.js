const express = require("express");

let configViewEngine = (app) => {
  app.use(express.static("./backend/public"));
  app.set("view engine", "ejs");
  app.set("views", "./backend/views");
};

module.exports = configViewEngine;
