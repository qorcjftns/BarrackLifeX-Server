
// Load Modules
var express		= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');

process.env.JWT_SECRET	= "barracklifex-server-jwt-key";

// MongoDB Initialization
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/BarrackLifeX-Server', { useNewUrlParser: true });

// Express Initilization

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index', {
		title: "MY HOMEPAGE",
		length: 5
	});
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token'); //1
  next();
});

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));


// Starts app
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

