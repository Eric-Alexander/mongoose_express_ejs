var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname+'/client/static'));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/Metal');

//connects mongoose.js to database
require('./server/config/mongoose.js');

//below connects to the controllers via the routes!

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


// app.get('/bands/:id', function(req,res){
// 	Metal.findOne({_id: req.params.id}, function(err, band){
// 		console.log(band)
// 		console.log(req.params.id)
// 		res.render('band', {band:band});
// 	});
// });

// app.get('/bands/add', function(req,res){
// 	res.render('index');
// });

// app.get('/', function(req,res){
// 	res.redirect("/bands");
// });

// app.post('/bands/:id/edit', function(req,res){
// 	console.log(req.body)
// 	//need a different value for each key to update
// 	Metal.update({_id: req.params.id}, {b_name:req.body.b_name, b_origin:req.body.b_origin, b_genre:req.body.b_genre, b_label:req.body.b_label, b_description:req.body.b_description}, function(err, band){
// 		res.redirect('/bands');
// 	});
// });

// app.post('/bands/:id/destroy', function(req,res){
// 	Metal.remove({_id: req.params.id}, function(err,band){
// 		res.redirect('/bands');
// 	});

// });

// app.post('/bands/new', function(req,res){
// 	var band = new Metal({b_name: req.body.b_name, b_genre: req.body.b_genre, b_origin: req.body.b_origin, b_label: req.body.b_label, b_description: req.body.b_description});
// 	band.save(function(err){
// 		if(err){
// 			res.render('index', {errors: band.errors})
// 			console.log("UNABLE TO INPUT BAND");
// 		}else{
// 			console.log("BAND ADDED TO DATABASE");
// 			res.redirect('/bands');
// 		}
// 	});
// });

// app.get('/bands', function(req,res){
// 	Metal.find({}, function(err, bands){
// 		if(err){
// 			console.log("CANNOT RETREIVE BANDS");
// 		}else{
// 			console.log(bands)
// 		res.render('bands', {bands:bands})
// 		}
// 	});
// });


var server = app.listen(8000, function(){
	console.log("APPLICATION IS DEFINITLEY LISTENING...");
});