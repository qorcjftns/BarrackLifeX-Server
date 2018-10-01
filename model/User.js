
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var userSchema = new Schema({
    user_name: {
		type: String,
		required: true
	},
    user_login_id: {
		type: String,
		required: true
	},
	user_login_pw: {
		type: String,
		required: true
	},
	user_rank: {
		type: Number,
		required: true,
		default: 1
	},
	user_is_admin: {
		type: Boolean,
		default: true
	},
    published_date: { type: Date, default: Date.now  }
});


userSchema.pre('save', function(next) {
	console.log('저장 중...');
	next();
});
userSchema.post('find', function(result) {
	console.log('검색 완료.');
});


module.exports = mongoose.model('user', userSchema);