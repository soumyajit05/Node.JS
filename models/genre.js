var mongoose = require('mongoose');

//Genre Schema
var bookSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    },
    Published:{
        type:String,
        default:"Yes"
    }
});

var Genre = module.exports=
    mongoose.model('Genre',bookSchema);

//Get Genres
module.exports.getMyGenres =
    function(callback,limit){
        Genre.find(callback).limit(limit);
    }

//Function getGenresByID
module.exports.getGenreById = function (id, callback) {
    Genre.findById(id,callback);
}

//Function Add genre
module.exports.addGenre =
    function(genre,callback){
        Genre.create(genre,callback);
    }