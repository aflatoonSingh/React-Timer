var express = require('express');

//create our app 

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); //calling folder Public

app.listen(PORT, function() {

	console.log('Express server is up on port' + PORT);
})