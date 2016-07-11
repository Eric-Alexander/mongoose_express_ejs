var mongoose = require('mongoose');
var Metal = mongoose.model('Metal');

module.exports = {
	show: function(req, res){
		Metal.find({}, function(err, bands){
			if(err){
				console.log("CANNOT RETREIVE BANDS");
			}else{
				console.log(bands)
			res.render('bands', {bands:bands})
			}
		});
	},
	// adds: function(req, res){
	// 	res.render('index');
	// }
	retreive: function(req,res){
		Metal.findOne({_id: req.params.id}, function(err, band){
		console.log(band)
		console.log(req.params.id)
		res.render('band', {band:band});
	});
	}
	create: function(req, res){
		var band = new Metal({b_name: req.body.b_name, b_genre: req.body.b_genre, b_origin: req.body.b_origin, b_label: req.body.b_label, b_description: req.body.b_description});
		band.save(function(err){
			if(err){
				res.render('index', {errors: band.errors})
				console.log("UNABLE TO INPUT BAND");
			}else{
				console.log("BAND ADDED TO DATABASE");
				res.redirect('/bands');
			}
		// MetalSchema.path('b_name').required(true, 'Band name cannot be blank');
		// MetalSchema.path('b_genre').required(true, 'Please declare genre!');
		});
	}
	update: function(req, res){
			Metal.update({_id: req.params.id}, {b_name:req.body.b_name, b_origin:req.body.b_origin, b_genre:req.body.b_genre, b_label:req.body.b_label, b_description:req.body.b_description}, function(err, band){
		res.redirect('/bands');
	});
	}

	destroy: function(req,res){
		Metal.remove({_id: req.params.id}, function(err,band){
		res.redirect('/bands');
	});
	}

}