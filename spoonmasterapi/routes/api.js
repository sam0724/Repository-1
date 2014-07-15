var express = require('express');
var router = express.Router();

var Factual = require('factual-api');
var factual = new Factual('v6iTCtlQuY2KoLdFHixSSgHC9iCVKNfpHwvVsNNU', 'RU4DkI6o45z6PfGZYenUt58Fun7vpJEb9lqO8apl');



/* GET home page. */
router.get('/', function (req, res) {
    // res.render('index', { title: 'Express' });

    factual.get('/t/places?q=starbucks&include_count=true', function (error, result) {
        console.log("show " + result.included_rows + "/" + result.total_row_count + " rows:", result.data);
        res.send(result.data);
    });



});

module.exports = router;
