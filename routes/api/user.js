// routes/index.js
var User	= require('../../model/User');

module.exports = function(app)
{
	// GET ALL BOOKS
	app.get('/login', function(req,res){
		var user = new User();
		console.log(user.find());
	});

};