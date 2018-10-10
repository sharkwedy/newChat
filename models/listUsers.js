const express = require('express');
const app = express();

var users = [];

function getUsersStatus (status) {
    var usersStatus = []
    for(var i=0; i<users.length; i++) {
        if(users[i].status==status)
        {
            usersStatus.push(users[i]);
        }
    }
    return usersStatus;
}

function getUser (userName) {
    for(var i=0; i<users.length; i++) {
        if(users[i].userName==userName)
        {
            return i;
        }
    }
    return false; 
}

module.exports = app;
