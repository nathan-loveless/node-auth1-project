const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');

router.get('/', auth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// function auth(req, res, next) {
// 	const {username, password} = req.headers;
// 	console.log(username);
// 	if(req.session && req.session.user) {}
// 	Users.findBy({ username })
// 	    .first()
// 	    .then(user => {
// 	      if (user && bcrypt.compareSync(password, user.password)) {
// 	      	console.log("Success!")
// 	        next();
// 		  } 
// 		  else {
// 	        res.status(401).json({ message: 'You shall not pass!' });
// 	      }
// 	    })
// 	    .catch(error => {
// 	      res.status(500).json(error);
// 	    });
//}

// function auth(req, res, next)  {
// 	const {username, password } = req.headers;

// 	if(req.session && req.session.user) {
// 		Users.findBy({username})
// 			.first()
// 			.then(user => {
// 				if(user && bcrypt.compareSync(password, user.password)) {
// 					next();
// 				} else {
// 					res.status(401).json({message: 'You shall not pass!'});
// 				}
// 			})
// 			.catch(error => {
// 				res.status(500).json({message: 'Server error'});
// 			});
// 	} else {
// 		res.status(400).json({message: 'You shall not pass!'});
// 	}
// }

function auth(req, res, next) {
	if(req.session && req.session.user) {
		next();
	} else {
		res.status(401).json({message: "You shall not pass!"});
	}
}

module.exports = router;