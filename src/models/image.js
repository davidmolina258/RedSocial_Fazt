const path = require("path");
const moongose = require("mongoose");
const { Schema } = moongose;

const ImgSchema = new Schema({
  tittle: { type: String },
  description: { type: String },
  filename: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

ImgSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(path.extname(this.filename), " ");
});

module.exports = moongose.model("images", ImgSchema);
