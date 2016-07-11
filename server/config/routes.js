var bands = require('../controllers/bandsControllers.js');

module.exports = function(app){
	app.get('/', function(req,res){
		bands.show(req,res);
	});
	app.get('/bands/add', function(req,res){
		res.render('index');
	});
	app.get('/bands/:id', function(req,res){
		bands.retreive(req,res);
	});
	app.get('/bands', function(req,res){
		bands.show(req, res);
	});
	app.post('/bands/new', function(req,res){
		bands.create(req,res);
	});
	app.post('/bands/:id/edit', function(req,res){
		bands.update(req, res);
	});
	app.post('/bands/:id/destroy', function(req,res){
		bands.destroy(req,res);
	});

}