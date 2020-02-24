const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  movieid: { type: String, required: true },
  moviename: { type: String, required: true },
  poster: { type: String, required: true },
  genre: { type: String, required: true },
  level: { type: Number, required: true },
},
{ versionKey: false });

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports.MovieModel = MovieModel;

const UserSchema = new Schema({
    username: { type: String, required: true },
    genre: { type: String, required: true }
},
{ versionKey: false });
  
const UserModel = mongoose.model('UserModel', UserSchema);

module.exports.UserModel = UserModel;