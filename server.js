var express = require('express');

//create our app 

var app = express();

app.use(express.static('public')); //calling folder Public

app.listen(3000, function() {

	console.log('Express server is up on port 3000')
})