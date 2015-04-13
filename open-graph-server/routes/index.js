var express = require('express');
var router = express.Router();
var ogs = require('open-graph-scraper');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getinfo', function(req, res){
  var url = req.query.url;
  var response = "";
  ogs(
	   { url: url },
	    function(er, result) {
        res.contentType('application/json');
        res.json(result);
      }
  );
});

module.exports = router;
