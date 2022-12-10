const express = require("express");
const { newCreate } = require("../controllers/home.controllers");
const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", newCreate);
  return app.use("/", router);
};

module.exports = initWebRoutes;
