var express = require('express');
var router  = express.Router();
var User	= require('../../model/User');

router.post('/login', function(req,res,next){
	User.find({})
		.sort({username:1});
	next();
});

module.exports = router;