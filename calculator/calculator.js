const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("The result is " + result);
})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  console.log(req.body);

  var num1 = parseFloat(req.body.weight);
  var num2 =  parseFloat(req.body.height);
  var result = num1 / Math.pow(num2, 2);

  res.send("Your BMI is " + result);
})

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`)
})
