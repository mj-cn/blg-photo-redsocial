const express = require("express");
const path = require("path");

var app = express();
var html = path.join(__dirname, "/index.html");

app.use("/", express.static(path.join(__dirname, "..", "/dist")));
app.use("/node_modules", express.static(path.join(__dirname, "..", "/node_modules")));

app.get("*", (req, res) => {
  res.sendFile(html);
})


app.listen(3002, () => {
  console.log("listen 3002 ;)");
})