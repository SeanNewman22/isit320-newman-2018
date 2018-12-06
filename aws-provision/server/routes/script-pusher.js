var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;


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

router.get('/copy-get-started', function(request, response) {
    var message = { 'result': 'success',
        'route': '/copy-get-started' };
    console.log('copy get started called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/remove-known-host', function(request, response) {
    var message = { 'result': 'success',
        'route': '/remove-known-host',
        'instanceData': 'myInstance',
        'allocationIds': 'standard',
        'regions': 'US-West' };
    console.log('remove known host called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
