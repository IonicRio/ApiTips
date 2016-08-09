var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000'); // set the 'root path' to your API

describe("Testing Sample API", function(){ // Name of test section
    it('Should return all /posts', function(done){ // name of this specific test
        server.get('/posts') // request to /posts resource in API
              .expect('Content-type', /json/) // The response should have json
              .expect(200) // The response code should be 200 (OK)
              .end(function(err, res){
                  // Here you can handle the request response and test his proprieties
                  res.status.should.equal(200);
                  done();
              });
    })
});
