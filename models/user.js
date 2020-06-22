var mongoose = require('mongoose');
var connection = require('./connection');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  loginname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar_url: {
    type: String,
    default: '/public/images/avatar-default.png'
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  score: Number,
  recent_replies: [],
  recent_topics: []
});

module.exports = connection.model('User', userSchema);