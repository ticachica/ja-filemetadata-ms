'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var multer = require('multer'),
	bodyParser = require('body-parser'),
	path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index');
});

app.post('/get-file-size', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	console.log('{size: '+req.file.size+'}'); //form files
  var fsize = req.file.size;
	res.json({size: fsize});
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

