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
  score: {
    type: Number,
    default: 0
  },
  signature: {
    type: String,
    default: '这个人很懒，什么都没有留下。'
  },
  recent_replies: [],
  recent_topics: []
});

module.exports = connection.model('User', userSchema);