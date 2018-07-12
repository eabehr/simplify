/**
 * Define schema for the Request object in the db
 * Anytime new fields are added to the request, this schema must be updated
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Request
var Request = new Schema({
  clientId: {
    type: String
  },
  gender: {
    type: String
  },
  items: {
    type: String
  },
  status: {
    // TODO: status should be enum: pending, approved, rejected, fulfilled
    type: String
  }
},{
    collection: "requests"
});

module.exports = mongoose.model("Request", Request);