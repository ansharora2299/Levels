const router = require('express').Router();
let Model = require('../utils/schema');

router.route('/').get((req, res) => {
  Model.MovieModel.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json('Error: ' + err));
  Model.UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//   const username=req.body.username;
//   const movieName = req.body.movieName;
//   const img = req.body.img;
//   const level= Number(req.body.level);
  

//   const newGame = new Game({
//     username,
//     movieName,
//     img,
//     level,
    
//   });

//   newGame.save()
//   .then(() => res.json('game added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });
router.route('/name').get((req, res) => {
    console.log(req.query)
     let u=req.query.name
    Model.UserModel.find({"username":u},{"genre":1,"_id":0},function(err,data){
    console.log(data)
    Model.MovieModel.find({"genre":data[0].genre}).sort({"level":-1})
      .then(games => res.json(games))
      .catch(err => res.status(400).json('Error: ' + err));
    });
})

// router.route('/').get((req, res) => {
  
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;