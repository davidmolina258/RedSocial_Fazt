const express = require("express");

const routes = express.Router();

const home = require("../controllers/home");
const image = require("../controllers/image");

module.exports = (app) => {
  routes.get("/", home.index);
  routes.get("/images/:image_id", image.index);
  routes.post("/images", image.create);
  routes.post("/images/:id/like", image.like);
  routes.post("/images/:image_id/comment", image.comment);
  routes.delete("/images/:id", image.romeve);

  app.use(routes);
};
