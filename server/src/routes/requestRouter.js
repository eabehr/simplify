/**
 * Router to define CRUD functionality for request form on the node side
 */

var express = require("express");
var app = express();
var requestRouter = express.Router();

// Require Request schema in our routes module
var Request = require("../models/Request");

// Define create request route
requestRouter.route("/add/post").post(function (req, res) {
  var request = new Request(req.body);
  request.save()
    .then(request => {
      res.json("request added successfully");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Define GET all requests route
requestRouter.route("/").get(function (req, res) {
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
requestRouter.route("/:id").get(function (req, res) {
  var id = req.params.id;
  Request.findById(id, function (err, request) {
    res.json(request);
  });
});

// Define UPDATE route for one request
requestRouter.route("/update/:id").post(function (req, res) {
  var id = req.params.id;
  Request.findById(id, function (err, request) {
    if (!request) {
      return next(new Error("Could not find request"));
    } else { 

      // TODO: Trying to set request as request = req.body gives error
      // TypeError: request.save is not a function
      // For now, set each field separately
      request.status = req.body.status;
      request.clientId = req.body.clientId;
      request.gender = req.body.gender;
      request.items = req.body.items;
      request.urgency = req.body.urgency;
      request.notes = req.body.notes;

      request.save().then(request => {
        res.json("Update complete");
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = requestRouter;