
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var rankSchema = new Schema({
    rank_id: {
		type: Number,
		required: true
	},
    rank_name: {
		type: String,
		required: true
	},
	rank_type: {
		type: String,
		required: true
	},
    published_date: { type: Date, default: Date.now  }
});


module.exports = mongoose.model('rank', rankSchema);