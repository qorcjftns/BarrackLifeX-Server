
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var scheduleSchema = new Schema({
	schedule_title: {
		type: String,
		required: true
	},
    published_date: { type: Date, default: Date.now  }
});


scheduleSchema.pre('save', function(next) {
	console.log('User 저장 중...');
	next();
});
scheduleSchema.post('find', function(result) {
	console.log('User 검색 완료.');
});


module.exports = mongoose.model('schedule', scheduleSchema);