var express = require('express'),
	router = express.Router();

router.get('/', ensureAuth, function(req, res){
	res.render('index')
});


function ensureAuth(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}


module.exports = router;