var express = require('express');
var router = express.Router();
var controllerMain = require('/Users/MehtabRandhawa/Desktop/boons/loc8r/app_server/controllers/main')
/* GET home page. */

router.get('/', controllerMain.index); 

module.exports = router;
