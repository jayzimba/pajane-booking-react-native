var express = require("express");
var app = express();

var mysql = require("mysql");
var bodyParser = require("body-parser");

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", //empty for window
  database: "pajane",
});

var server = app.listen(1345, function () {
  //server port assignment
  var host = server.address().address;
  var port = server.address().port;
  console.log("started");
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});

app.get("/quick_booking", function (req, res) {
  con.query("select * from quick_booking", function (error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});

app.get("/trips", function (req, res) {
  con.query("select * from trips", function (error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});
