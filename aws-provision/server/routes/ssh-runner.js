var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;
const elfUtils = require('elven-code').elfUtils;



const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['CpuInfo', 'VersionCheck', 'uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({result: 'error', error: 'Invalid Option: ' + request.query.script, script: request.query.script});
            return;
        }
    }
    next();
};

router.use(check);

router.get('/run-get-started', function(request, response) {
    var message = { 'result': 'success',
        'route': '/run-get-started' };
    console.log('run get started called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/run-ubuntu-setup', function(request, response) {
    var message = { 'result': 'success',
        'route': '/run-ubuntu-setup' };
    console.log('run ubuntu setup called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;