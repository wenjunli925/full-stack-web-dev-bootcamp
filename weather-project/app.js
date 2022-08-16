const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const https = require("https");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // console.log(req.body.cityName);

  const query = req.body.cityName;
  const apiKey = "45ffd6e58f704d0ba87696f7295e22ed";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      console.log(temp + description);

      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>The temperature in " + query + " is " + temp + "  degress Celcius.</h1>");
      res.write("<p>The weather is currently is " + description + "<p>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });


  });

});




app.listen(3000, () => {
  console.log("Server is running on port 3000...");
})
