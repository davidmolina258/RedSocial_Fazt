const mongoose = require("mongoose");

const URI =
  "mongodb+srv://practica1a:wn3J8wBHhyCqwskW@practica1.fxdycli.mongodb.net/social-network?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then((res) => console.log("DB esta Conectada"))
  .catch((err) => console.log("DB no se pudo Conectar"));

module.exports = mongoose;
