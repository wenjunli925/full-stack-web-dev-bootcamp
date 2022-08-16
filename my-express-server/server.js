const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: wenjunli925@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("Hi, my name is Wenjun Li!");
});

app.get("/projects", function (req, res) {
    res.send("This is my project page!");
});

app.listen(3000, function () {
  console.log("Server started on port 3000...");
});
