
var express 	= require('express');
var router  	= express.Router();
var User		= require('../../model/User');
var util		= require('../../util/api/auth/loginUtil');
var jwt 		= require('jsonwebtoken');

router.post('/create', // util.isLoggedin,
	function(req,res,next) {
		var newUser = new User();
		newUser.user_login_id 	= req.body.user_login_id;
		newUser.user_login_pw 	= req.body.user_login_pw;
		newUser.user_is_admin 	= req.body.user_is_admin;
		newUser.user_name		= req.body.user_name;
		newUser.save(function(err, u) {
			if(err) {
				res.json({ success: false, error: err });
			} else {
				res.json({ success: true, error: undefined });
			}
		});
	}
);

module.exports = router;