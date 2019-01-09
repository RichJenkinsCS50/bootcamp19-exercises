const express = require("express");
const path = require('path')
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname +'/index.html'));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname +'/index.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname +'/about.html'));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname +'/contact.html'));
});

app.get("/display", (req, res) => {
  res.sendFile(path.join(__dirname +'/display.html'));
});

app.listen(3000);
console.log("Running at port 3000");
