const express = require("express");
const app = express();
var cors = require('cors');

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("listening on 3000");
});

app.get("/", function (req, res) {
  res.send("hello world");
});

// data base 연결
const database = require('./module/db_connect.js');
const conn = database.conn();