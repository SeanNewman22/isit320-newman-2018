var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'EC2 copy file Server',
        author: 'Sean Newman'
    });
});

router.get('/foo', (request, response) => {
    const result = { result: 'success' };
    response.send(result);
});

module.exports = router;
