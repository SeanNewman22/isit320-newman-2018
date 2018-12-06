var express = require('express');
var router = express.Router();
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
const createInstance = require('./aws/AwsPromise');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'aws-final Server',
        author: 'Sean Newman'
    });
});

/* Set up a route called foo. */
/*
router.get('/foo', function(request, response) {
    var message = { 'result': 'success', 'status': 'bar', 'file': 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});
*/

/*router.get('/create-educate', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.awsEducate();
    createInstance(awsInstanceParams);
    response.send({result: 'success',
        route: '',
        instanceData: '',
        allocationIds: '',
        regions: ''
    });
}); */

router.get('/associate-elastic-ip', function(request, response) {
    var message = { 'result': 'success',
        'route': '',
        'instanceData': '',
        'allocationIds': '',
        'regions': '' };
    console.log('associate elastic ip called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-educate', function(request, response) {
    var message = { 'result': 'success',
        'route': '',
        'instanceData': '',
        'allocationIds': '',
        'regions': '' };
    console.log('create educate called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-standard', function(request, response) {
    var message = { 'result': 'success',
        'route': '',
        'instanceData': '',
        'allocationIds': '',
        'regions': '' };
    console.log('create standard called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/get-instance-status', function(request, response) {
    var message = { 'result': 'success',
        'route': '',
        'instanceData': '',
        'allocationIds': '',
        'regions': '' };
    console.log('get instance status called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/reboot-instance', function(request, response) {
    var message = { 'result': 'success',
        'route': '',
        'instanceData': '',
        'allocationIds': '',
        'regions': '' };
    console.log('reboot instance called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
