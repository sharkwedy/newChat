var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('cadastro');
});

router.post('/',
  function(req, res) {
    var user = {
      userName: req.body.username,
      password: req.body.password,
      status: 'offline'
    };
    for(var i=0;i<global.users.length;i++) {
      if(user.userName==global.users[i].userName) {
        res.redirect('/');
      }
    }
    global.users.push(user);
    res.redirect('/');
  }
);

module.exports = router;
