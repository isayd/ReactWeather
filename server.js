var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if (req.protocol === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

//Add functionality to our express aplicattion
app.use(express.static('public'));

// Initializa server
app.listen(PORT, function(){
   console.log('Express server is up on port ' + port);
});
