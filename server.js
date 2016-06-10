var express = require('express');
var port = 8981;
var app = express();
app.use(express.static(__dirname + '/front-end'));

app.listen(8981, function(){
  console.log('Listening on port ' + port)
})
