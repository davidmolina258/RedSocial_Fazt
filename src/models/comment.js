const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  name: { type: String },
  email: { type: String },
  comment: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = model("comments", commentSchema);
