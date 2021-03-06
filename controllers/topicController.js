var Topic = require('../models/topic');

// 显示完整的话题列表
exports.topic_list = function (req, res, next) {
  var sort = { 'top': -1, 'create_at': -1 };
  var skip = 0;
  if (req.query.page) skip = (req.query.page - 1) * 20;
  Topic.find().populate('author').sort(sort).skip(skip).limit(20).exec(function (err, topics) {
    if (err) return next(err);
    res.render('index.html', {
      session: req.session.user,
      topics: topics
    });
  });
};

// 为每个话题显示详细信息的页面
exports.topic_detail = function (req, res, next) {
  Topic.findById(req.params.id).populate('author').exec(function (err, topic) {
    if (err) return next(err);
    res.render('topic.html', {
      session: req.session.user,
      topic: topic
    });
  });
};

// 由 GET 显示创建话题的表单
exports.topic_create_get = function (req, res, next) {
  res.render('create.html', { session: req.session.user })
};

// 由 POST 处理话题创建操作
exports.topic_create_post = function (req, res, next) {
  new Topic(req.body).save(function (err, topic) {
    if (err) return next(err);
    res.redirect('/');
  })
};

// 由 GET 显示删除话题的表单
exports.topic_delete_get = function (req, res, next) {
  res.render('delete.html', { id: req.params.id } )
}

// 由 POST 处理话题删除操作
exports.topic_delete_post = function (req, res, next) {
  Topic.findById(req.params.id).remove(function (err, data) {
    if (err) return next(err);
    res.redirect('/');
  });
};

// 由 GET 显示更新话题的表单
exports.topic_update_get = function (req, res, next) {
  Topic.findById(req.params.id).populate('author').exec(function (err, topic) {
    if (err) return next(err);
    res.render('update.html', {
      session: req.session.user,
      topic: topic
    });
  });
};

// 由 POST 处理话题更新操作
exports.topic_update_post = function (req, res, next) {
  Topic.findById(req.params.id, function (err, topic) {
    if (err) return next(err);
    // if(!req.body.top) req.body.top = false
    // if(!req.body.good) req.body.good = false
    console.log(req.body)
    topic.update(req.body, function (err, data) {
      if (err) return next(err);
      res.redirect('/topic/' + req.params.id);
    });
  });
};