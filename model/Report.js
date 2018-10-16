
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var reportSchema = new Schema({
	report_type: {
		type: [Object]
	},
	report_title: {
		type: String,
		required: true
	},
	report_body: {
		type: String,
		required: true
	},
	report_owner: {
		type: Object,
		required: true
	},
	report_receipants: {
		type: [Object],
		default: []
	},
    published_date: { type: Date, default: Date.now  }
});


reportSchema.pre('save', function(next) {
	console.log('Report 저장 중...');
	next();
});
reportSchema.post('find', function(result) {
	console.log('Report 검색 완료.');
});


module.exports = mongoose.model('report', reportSchema);