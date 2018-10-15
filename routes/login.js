var express = require('express');
var router = express.Router();

function getPosition (name) {
  for(var i=0;i<global.users.length;i++) {
    if(name==global.users[i].userName) {
      return i;
    }
  }
}

function comparePassword (positionUser,pass) {
  if( global.users[positionUser].password == pass ) {
    return positionUser;
  }
  else {
    return -1;
  }
}

function authentication (name,pass) {
  var positionUser = getPosition (name);
  return comparePassword(positionUser,pass);
}

function setStatusOnline (positionUser) {
  global.users[positionUser].status = 'online';
}

router.post('/login',
  function(req, res) {
    var positionUser = authentication(req.body.username, req.body.password);
    if( positionUser >= 0 ) {
      setStatusOnline(positionUser);
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
