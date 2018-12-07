const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('index-aws-test.js tests', function() {

    it('should test /associate-elastic-ip returns valid JSON', function (done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /associate-elastic-ip returns specific values', function (done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/associate-elastic-ip',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
    
    it('should test /create-educate returns valid JSON', function (done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /create-educate returns specific values', function (done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/create-educate',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
    
    it('should test /create-standard returns valid JSON', function (done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /create-standard returns specific values', function (done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/create-standard',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
    
    it('should test /get-instance-status returns valid JSON', function (done) {
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /get-instance-status returns specific values', function (done) {
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/get-instance-status',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
    
    it('should test /reboot-instance returns valid JSON', function (done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    
    it('should test /reboot-instance returns specific values', function (done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                'result': 'success',
                'route': '/reboot-instance',
                'instanceData': 'myInstance',
                'allocationIds': 'standard',
                'regions': 'US-West'
            })
            .expect(200, done);
    });
    
});