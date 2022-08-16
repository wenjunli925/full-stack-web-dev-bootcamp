// set up a local server
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// set up a database and its collections
mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema);

// Request targeting all articles

app.route("/articles")
  .get((req, res) => {
    Article.find({}, (err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }

    });
  })
  .post((req, res) => {
    console.log(req.body.title),
      console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });

    newArticle.save((err) => {
      if (!err) {
        res.send("Successfully added a new article!");
      } else {
        res.send(err);
      }
    });
  })


// Request targeting a specific article

app.route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({
      title: req.params.articleTitle
    }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching that title was found.");
      }
    });
  })

  .put((req, res) => {
    Article.replaceOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      (err, results) => {
        if(!err) {
          res.send("Successfully updated the article!");
        } else {
          console.log(err);
        }
      }
    )
  })

  .patch((req, res) => {
    Article.updateOne(
      {title: req.params.articleTitle},
      {$set: req.body},
      (err, results) => {
        if(!err) {
          res.send("Successfully updated the article!");
        } else {
          console.log(err);
        }
      }
    )
  })

  .delete((req, res) => {
    Article.deleteOne(
      {title: req.params.articleTitle},
      (err) => {
      if (!err) {
        res.send("Successfully deleted the article!");
      } else {
        res.send(err);
      }
    })
  });





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
