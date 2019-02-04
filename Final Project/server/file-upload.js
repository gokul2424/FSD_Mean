/*eslint-disable*/
var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();
var cors = require('cors');


var DIR = './uploads/';


var upload = multer({dest: DIR});


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});




app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});

var port = process.env.PORT || 2000;



const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});