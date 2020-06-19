const Topic = require('../models/topic');

// 显示完整的话题列表
exports.topic_list = function(req, res) {
  Topic.find({}, function (err, topics) {
    if (err) { return next(err); }
    res.render('index.html', { topics: topics });
  });
};

// 为每个话题显示详细信息的页面
exports.topic_detail = function(req, res) { res.send('未实现：话题详细信息：' + req.params.id); };

// 由 GET 显示创建话题的表单
exports.topic_create_get = function(req, res) { res.send('未实现：话题创建表单的 GET'); };

// 由 POST 处理话题创建操作
exports.topic_create_post = function(req, res) { res.send('未实现：创建话题的 POST'); };

// 由 GET 显示删除话题的表单
exports.topic_delete_get = function(req, res) { res.send('未实现：话题删除表单的 GET'); };

// 由 POST 处理话题删除操作
exports.topic_delete_post = function(req, res) { res.send('未实现：删除话题的 POST'); };

// 由 GET 显示更新话题的表单
exports.topic_update_get = function(req, res) { res.send('未实现：话题更新表单的 GET'); };

// 由 POST 处理话题更新操作
exports.topic_update_post = function(req, res) { res.send('未实现：更新话题的 POST'); };