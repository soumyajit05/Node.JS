//Declare
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

Genre = require('./models/genre');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
    res.send('please Use /api/books or /api/MyGenres');
});

app.get('/api/Genres',function(req,res){
    Genre.getMyGenres(function(err,genres){
        if(err){
            throw err;
        }
        console.log(res.json);
        res.json(genres);
    });
});

app.get('/api/Genres/:_id',function(req,res){
    Genre.getGenreById(req.params._id,function(err,genre){
        if(err){
            throw err;
        }
        console.log(res.json);
        res.json(genre);
    });
});

app.post('/api/Genres',function(req,res){
    var genrename = req.body;
    Genre.addGenre(genrename,function(err,genrename){
        if(err){
            throw  err;
        }
        res.json(genrename);
    });
});

app.listen(3000);
console.log('bookstore project Running on Port 3000');
