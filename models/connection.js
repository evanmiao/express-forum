var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var connection = mongoose.connection;

connection.on('error', function (err) {
  console.log('connection error:' + err);
})
connection.once('open', function () {
  console.log('打开 mongodb 连接');
})

module.exports = connection;