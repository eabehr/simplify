/**
 * Define schema for a requested item
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Request
var ItemRequest = new Schema({
  // User ID for requester
  requesterId: {
    type: String
    // required: true // will be required after implementing user context
  },
  // ID of grouping of requests that were made together
  groupedRequestId: {
    type: String
  },
  // ID of client the item is requested for
  clientId: {
    type: String,
    required: true
  },
  // Type of item (ex: shirt, shoes, pillow, toothbrush)
  itemCategory: {
    type: String,
    required: true
  },
  // Any properties on the item (ex: size, color, gender)
  itemAttributes: {
    type: Object
  },
  // Status of request
  status: {
    // TODO: should be enum
    type: String,
    default: "pending"
  },
  // Urgency of request
  urgency: {
    // TODO: should be enum
    type: String,
    default: "standard"
  },
  // Optional notes
  notes: {
    type: String
  },
  // Creation date
  date: {
    type: Date
  }
},{
    collection: "requestedItems"
});

module.exports = mongoose.model("ItemRequest", ItemRequest);