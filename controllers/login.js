var express = require('express');
var router = express();
router.get('/', function(request, response){
	response.render('login/index');
});
