const path = require("path");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const morgan = require("morgan");
const multer = require("multer");
const express = require("express");

const route = require("../route/index.js");

module.exports = (app) => {
  //settings
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "../views"));
  app.engine(
    ".hbs",
    exphbs.engine({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layout"),
      extname: ".hbs",
      handlebars: allowInsecurePrototypeAccess(Handlebars),
      helpers: require("./helpers.js"),
    })
  );
  app.set("engine views", ".hbs");

  //midleware
  app.use(express.static("./src/public"));
  app.use(morgan("dev"));
  app.use(multer({ dest: path.join("../public/upload/temp") }).single("img"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //route
  route(app);

  //handlerror

  return app;
};
