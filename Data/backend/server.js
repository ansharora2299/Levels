const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
require('dotenv').config();
const MovieDB = require('moviedb')('ed03ffb2e36a94344e2e42b4ddd24712');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
const Model = require('./utils/schema')

const uri = 'mongodb://localhost:27017/gamification'
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

MovieDB.genreMovies({id:28}, (err, res) => {
  var i
  var c=1
  for(i=0;i<res.results.length;i++){
      if(res.results[i].original_language=='en'){
          let a='https://image.tmdb.org/t/p/original'+res.results[i].poster_path
          Model.MovieModel.create({
              movieid:res.results[i].id,
              moviename:res.results[i].original_title,
              poster:a,
              genre:'Action',
              level:c},function(err,trialinstance){
                  if (err) console.log(err)
          })
          c=c+1
      }    
  }
})

Model.UserModel.create({
  username:'ansh',
  genre:'Action'
},function(err,trialinstance){
  if (err) console.log(err)
})


const usersRouter = require('./routes/getData');
app.use('/getData', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});