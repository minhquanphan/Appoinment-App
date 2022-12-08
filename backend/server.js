const express = require("express");
const bodyParser = require("body-parser");
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Backend Nodejs is running on port " + port);
});
