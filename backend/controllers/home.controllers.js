const { catchAsync, sendResponse, AppError } = require("../helpers/utils");

const homeController = {};

homeController.newCreate = catchAsync(async (req, res, next) => {
  return res.render("homepage.ejs");
});

module.exports = homeController;
