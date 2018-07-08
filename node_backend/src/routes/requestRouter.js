/**
 * Router to define CRUD functionality for request form on the node side
 */

var express = require('express');
var app = express();
var requestRouter = express.Router();

// Require Request schema in our routes module
var Request = require('../models/Request');

// Define create request route
requestRouter.route('/add/post').post(function (req, res) {
  debugger;
  console.log(req.body);
  var request = new Request(req.body);
      request.save()
    .then(request => {
    res.json('request added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Define GET all requests route
requestRouter.route('/').get(function (req, res) {
  Request.find(function (err, requests){
    if(err){
      console.log(err);
    }
    else {
      res.json(requests);
    }
  });
});

// Define GET single request route
requestRouter.route('/:id').get(function (req, res) {
  var id = req.params.id;
  Request.findById(id, function (err, item){
      res.json(item);
  });
});

module.exports = requestRouter;