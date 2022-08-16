const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(firstName, lastName, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us10.api.mailchimp.com/3.0/lists/37bd508bdc";
  const options = {
    method: "POST",
    auth: "wenjun:3b1750d7662422aadcb6775158b4c90c-us10"
  }

  const request = https.request(url, options, (response) => {
      response.on("data", (data) => {
        console.log(JSON.parse(data));
      })
  });

  request.write(jsonData);
  request.end();
})

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});


// api key
// 3b1750d7662422aadcb6775158b4c90c-us10

// list id
// 37bd508bdc

// --data @ - \
//   <<
//   EOF | jq '.id' {
//     "email_address": "$user_email",
//     "status": "pending",
//     "merge_fields": {
//       "FNAME": "$user_fname",
//       "LNAME": "$user_lname",
//       "BIRTHDAY": "$user_birthday",
//       "ADDRESS": {
//         "addr1": "123 Freddie Ave",
//         "city": "Atlanta",
//         "state": "GA",
//         "zip": "12345",
//
//       }
//     }
//   }
// EOF
