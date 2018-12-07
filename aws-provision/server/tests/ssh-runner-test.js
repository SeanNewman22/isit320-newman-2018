const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('ssh-runner-test.js tests', function() {

    it('should test /ssh-runner/run-get-started returns valid JSON', function (done) {
        request(app)
            .get('/ssh-runner/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /ssh-runner/run-get-started returns specific values', function (done) {
        request(app)
            .get('/ssh-runner/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/run-get-started'
            })
            .expect(200, done);
    });
    
    
    it('should test /ssh-runner/run-ubuntu-setup returns valid JSON', function (done) {
        request(app)
            .get('/ssh-runner/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /ssh-runner/run-ubuntu-setup returns specific values', function (done) {
        request(app)
            .get('/ssh-runner/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/run-ubuntu-setup'
            })
            .expect(200, done);
    });
    
});