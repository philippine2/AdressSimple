var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Elf-Express'
    });
});

router.get('/foo', (request ,response) => {
    response.send({result: 'SUCCESS!!'});
});

router.get('/worker', (request, response) => {
    response.render('worker', {
        title:request.query.title
    });
});
module.exports = router;
