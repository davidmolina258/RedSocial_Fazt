const path = require("path");
const { randomName } = require("../helpers/libs");
const fs = require("fs-extra");
const { Image, Comments } = require("../models/index");
const md5 = require("md5");
const controllerImg = {};

controllerImg.index = async (req, res) => {
  const image = await Image.findOne({
    filename: { $regex: req.params.image_id },
  });
  console.log(image);
  res.render("images.hbs", { image });
};

controllerImg.create = (req, res) => {
  //esta funcion esta hecha para comprobar si la imagen ya existe, usamos
  const imageIsSaved = async () => {
    const imgURL = randomName();
    const images = await Image.find({ filename: imgURL });
    if (images.length > 0) {
      imageIsSaved();
    } else {
      const ext = path.extname(req.file.originalname).toLocaleLowerCase();
      const imgTempPath = req.file.path;
      const targetPath = path.resolve(`src/public/upload/${imgURL}.${ext}`);

      if (
        ext === ".png" ||
        ext === ".jpg" ||
        ext === ".jpeg" ||
        ext === ".gif"
      ) {
        await fs.rename(imgTempPath, targetPath);
        const newImg = new Image({
          tittle: req.body.tittle,
          filename: imgURL + ext,
          description: req.body.description,
        });
        const imageGuardada = await newImg.save();
        console.log(newImg);
      } else {
        await fs.unlink(imgTempPath);
        res.status(500).json({ error: "only images allowed" });
      }

      res.redirect("/images/" + imgURL);
    }
  };
  imageIsSaved();
};
controllerImg.comment = async (req, res) => {
  console.log(req.params.image_id);
  const image = await Image.findOne({
    filename: { $regex: req.params.image_id },
  });
  console.log(image);
  // if (image) {
  //   const newComment = new Comments(req.body);
  //   newComment.gravatar = md5(newComment.email);
  //   newComment.image_id = image._id;
  //   await newComment.save();
  //   console.log(newComment);
  // }
  ////////////////////////////////////////////////////////////////
  //const newComment = new Comments(req.body);
  //newComment.gravatar = md5(newComment.email);
  //newComment.image_id = img._id;
  //await newComment.save();
  //console.log(newComment);
  //res.redirect("/images/" + req.params.image_id);
  res.send("Works!");
};
controllerImg.update = (req, res) => {};
controllerImg.romeve = (req, res) => {};
controllerImg.like = (req, res) => {};

module.exports = controllerImg;
