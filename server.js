var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
      res.redirect('http://' + req.hostname + req.url);
  } else {
      next();
  }
});

//Add functionality to our express aplicattion
app.use(express.static('public'));

// Initialice server
app.listen(PORT, function(){
   console.log('Express server is up on port ' + PORT);
});
