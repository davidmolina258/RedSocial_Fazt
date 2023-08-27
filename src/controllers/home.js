const controllerHome = {};
const { Image } = require("../models/index.js");

controllerHome.index = async (req, res) => {
  const imagenes = await Image.find().sort({ timestamp: -1 });
  res.render("index.hbs", { imagenes });
};

controllerHome.create = (req, res) => {};
controllerHome.update = (req, res) => {};
controllerHome.romeve = (req, res) => {};

module.exports = controllerHome;
