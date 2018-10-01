var express 	= require('express');
var router  	= express.Router();
var User		= require('../../model/User');
var util		= require('../../util/api/auth/loginUtil');
var jwt 		= require('jsonwebtoken');

router.post('/login', 
	function(req,res,next){
		var isValid = true;
		var validationError = {
			name:'ValidationError',
			errors:{}
		};

		if(!req.body.user_login_id){
			isValid = false;
			validationError.errors.user_login_id = {message:'Username is required!'};
		}
		if(!req.body.user_login_pw){
			isValid = false;
			validationError.errors.user_login_pw = {message:'Password is required!'};
		}

		if(!isValid) return res.json(util.successFalse(validationError));
		else next();
	},
	function(req,res,next){
		console.log("user login request: ");
		console.log("\tid: " +  req.body.user_login_id);
		console.log("\tpw: " +  req.body.user_login_pw);
		User.findOne({
				user_login_id: req.body.user_login_id,
				user_login_pw: req.body.user_login_pw
			})
			.select({user_login_id:1, user_login_pw:1, user_name:1, user_rank:1, user_is_admin:1})
			.exec(function (err, user) {
				if (err) {
					res.json({success: false, errors: err, token: undefined});
				} else {
					var payload = {
						_id : user._id,
						user_login_id: user.user_login_id
					};
					var secretOrPrivateKey = process.env.JWT_SECRET;
					var options = {expiresIn: 60*60*24};
					jwt.sign(payload, secretOrPrivateKey, options, function(err, token){
						if(err) return res.json(util.successFalse(err));
						res.json(util.successTrue(token));
					});
				}
			});
	}
);

router.get('/me', util.isLoggedin,
	function(req,res,next) {
		User.findById(req.decoded._id)
			.exec(function(err,user){
				if(err||!user) return res.json(util.successFalse(err));
				res.json(util.successTrue(user));
			});
	}
);

module.exports = router;