/**
 * Define schema for the Request object in the db
 * Anytime new fields are added to the request, this schema must be updated
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Request
var Request = new Schema({
  // ID of client items are being requested for
  clientId: {
    type: String
  },
  // Gender of client (relevant for some clothing items)
  gender: {
    type: String
  },
  // Requested items
  items: {
    type: String
  },
  // Status of request. Defaults to PENDING
  status: {
    // TODO: status should be enum: pending, approved, rejected, fulfilled
    type: String
  },
  // Urgency of request
  urgency: {
    // TODO: should be enum
    type: String
  },
  // Optional notes
  notes: {
    type: String
  }
},{
    collection: "requests"
});

module.exports = mongoose.model("Request", Request);