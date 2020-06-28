var mongoose = require('mongoose');
var connection = require('./connection');

var Schema = mongoose.Schema;

var topicSchema = new Schema({
  tab: {
    type: String,
    required: true,
    default: 'share'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  good: {
    type: Boolean,
    default: false
  },
  top: {
    type: Boolean,
    default: false
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  is_collect: Boolean,
  visit_count: Number,
  reply_count:  Number,
  last_raply_at: Date,
  replies: []
});

module.exports = connection.model('Topic', topicSchema);