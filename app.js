var express = require('express');
var app = express();

app.use(express.static(__dirname + "/client"));


app.get('/', function(req, res){
	res.send('Hello worlda');
});


app.listen(3000, function(){
	console.log('Connected on port 3000');	
});
