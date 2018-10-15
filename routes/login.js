var express = require('express');
var router = express.Router();

function authentication (name,pass) {
  var positionUser = -1;
  for(var i=0;i<global.users.length;i++) {
    if(name==global.users[i].userName) {
      positionUser = i;
      break;
    }
  }
  if(positionUser<0) {
    return -1;
  }
  else {
    if( global.users[i].password == pass ) {
      return positionUser;
    }
    else {
      return -1;
    }
  }
}

router.post('/login',
  function(req, res) {
    var positionUser = authentication(req.body.username, req.body.password);
    if( positionUser >= 0 ) {
      global.users[positionUser].status ='online';
      res.render('chat', { usuarios: global.users , id: positionUser});
    }
    else {
      res.redirect('/');
    }
  }
);

router.get('/', function(req, res) {
  res.render('login');
});

router.get('/logout', function(req, res) {
  res.redirect('/');
});

module.exports = router;
