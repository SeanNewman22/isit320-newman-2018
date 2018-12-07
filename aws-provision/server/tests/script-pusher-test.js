const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('script-pusher-test.js tests', function() {

    it('should test /script-pusher/copy-get-started returns valid JSON', function (done) {
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /script-pusher/copy-get-started returns specific values', function (done) {
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/copy-get-started'
            })
            .expect(200, done);
    });
    
    
    it('should test /script-pusher/remove-known-host returns valid JSON', function (done) {
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /script-pusher/remove-known-host returns specific values', function (done) {
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/remove-known-host',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
});