var express= require('express');
var route=express.Router();
var companies=require('../schema/schema');
var logger=require("../logger");

route.get('/companies/:name',function(request,response){
    let name=request.params.name;
   
    companies.find({name: name},function(err,data){
       if(err){
          logger.error("Not able to read data for companies/"+name);
          response.json({});
       }
        else{
          logger.info("Data read for companies/"+name);
          response.json(data);
        }
    });

});

module.exports=route;