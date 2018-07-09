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
  console.log("TYPE: "+ typeof(request));
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
  Request.find(function (err, requests) {
    if (err) {
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
  Request.findById(id, function (err, request) {
    res.json(request);
  });
});

// Define UPDATE route for one request
// /update/:id ?
requestRouter.route('/update/:id').post(function (req, res) {
  var id = req.params.id;
  Request.findById(id, function (err, request) {
    if (!request) {
      return next(new Error('Could not find request'));
    } else { 
      console.log("TYPE: "+ typeof(request));
      console.log("reuqest : " + request.status);
      console.log("**** " + req.body.status);
      request.status = req.body.status;
      //request = req.body;

      request.save().then(request => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = requestRouter;