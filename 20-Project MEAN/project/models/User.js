var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  SSID: {
    type: Number
  },
  email: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);