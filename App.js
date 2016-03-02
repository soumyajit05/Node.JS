//Declare
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

Genre = require('./models/genre');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
    res.send('please use /api/books or /api/genres');
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
        console.log(res.json);
        res.json(genres);
    });
});

app.listen(2000);
console.log('bookstore project Running on Port 2000');
