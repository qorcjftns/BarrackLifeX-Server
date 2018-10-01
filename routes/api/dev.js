
var express 	= require('express');
var router  	= express.Router();
var Rank		= require('../../model/Rank');
var util		= require('../../util/api/auth/loginUtil');
var jwt 		= require('jsonwebtoken');

router.post('/createrank',
	function(req,res,next) {
		var newRank = new Rank();
		newRank.rank_id 	= req.body.rank_id;
		newRank.rank_name 	= req.body.rank_name;
		newRank.rank_type 	= req.body.rank_type;
	
		newRank.save(function(err, u) {
			if(err) {
				res.json({ success: false, error: err });
			} else {
				res.json({ success: true, error: undefined });
			}
		});
	}
);
router.get('/listrank',
	function(req,res,next) {
		Rank.find({})
			.exec(function(err, rank) {
				if(err) res.json(util.successFalse(err));
				res.json(rank);
			});
	}
);

module.exports = router;