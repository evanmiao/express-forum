var Topic = require('../models/topic');
var User = require('../models/user');

// 显示完整的话题列表
exports.topic_list = function (req, res, next) {
  var skip = 0;
  if (req.query.page) skip = (req.query.page - 1) * 20;
  Topic.find().limit(20).skip(skip).exec(function (err, topics) {
    if (err) return next(err);
    res.render('index.html', {
      session: req.session.user,
      topics: topics
    });
  });
};

// 为每个话题显示详细信息的页面
exports.topic_detail = function (req, res, next) {
  Topic.findById(req.params.id, function (err, topic) {
    if (err) return next(err);
    User.findOne({
      loginname: topic.loginname
    }, function (err, user) {
      if (err) return next(err);
      res.render('topic.html', {
        session: req.session.user,
        topic: topic,
        user: user
      });
    })
  });
};

// 由 GET 显示创建话题的表单
exports.topic_create_get = function (req, res, next) {
  res.send('未实现：话题创建表单的 GET');
};

// 由 POST 处理话题创建操作
exports.topic_create_post = function (req, res, next) {
  res.send('未实现：创建话题的 POST');
};

// 由 GET 显示删除话题的表单
exports.topic_delete_get = function (req, res, next) {
  res.send('未实现：话题删除表单的 GET');
};

// 由 POST 处理话题删除操作
exports.topic_delete_post = function (req, res, next) {
  res.send('未实现：删除话题的 POST');
};

// 由 GET 显示更新话题的表单
exports.topic_update_get = function (req, res, next) {
  res.send('未实现：话题更新表单的 GET');
};

// 由 POST 处理话题更新操作
exports.topic_update_post = function (req, res, next) {
  res.send('未实现：更新话题的 POST');
};