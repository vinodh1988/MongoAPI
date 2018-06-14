var assert = require('assert');
var chai=require('chai');
var companies=require('../schema/schema');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('suite2',function(){
   it('should work',function(){
     chai.assert(12>3,true);
   })
})

describe('rest-check',function(){
 

 it('should not have error and data',function(done){
   companies.find({name:"Wetpaint"},function(err,data){
     
         chai.expect(err).to.equal(null);
         console.log(data);
         chai.expect(data.length).to.equal(1);
         done();
      });
    
  
})
});