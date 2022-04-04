
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/public/css",express.static(__dirname + "/public/css"));
app.use("/public/webfonts",express.static(__dirname + "/public/webfonts"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/scss",express.static(__dirname + "/scss"));
app.use("/node_modules",express.static(__dirname + "/node_modules"));


app.get("/", function(req, res) {
  res.render("home")
});

app.get('/collection', (req, res) => {
  res.render('collection');
 });

app.get('header', (req, res) => {
  const searchInput = req.body.getElementById('search-input')
    searchInput.addEventListener('keyup', (e) => {
      console.log(e.target.value)
  });
});

//Search Bar Functionality


app.listen(3000, function(req,res) {
  console.log("App is running on port 3000");
});