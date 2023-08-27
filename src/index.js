const express = require("express");
const config = require("./serve/config.js");

const app = config(express());

require("./database/dataBase.js");

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
