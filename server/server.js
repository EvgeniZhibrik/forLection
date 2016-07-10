'use strict';

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('../client'));

app.get('/*', function (req, res) {
 res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

var menu = require('../server/lunch.js');
var users = require('../server/users.js');

app.get('/users', function(req, res){
    res.send(users);
});


app.get('/menu', function(req, res){
    res.send(menu);
});

app.post('/order', function(req, res){
    var user = req.data.user;
    var flag = true;
    for (var i = 0; i < users.length; i++){
        if(users[i].name === user) {
            flag = false;
            break;
        }
    }
    if (flag){
        users.push({id: users.length, name: user});
    }
    res.send({time: Math.random()});
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
 console.log(users);
});