var User = require('../models/user');
var md5 = require('blueimp-md5');

// 为每位用户显示详细信息的页面
exports.user = function (req, res, next) {
  User.findOne({
    loginname: req.params.id
  }, function (err, user) {
    if (err) return next(err);
    res.render('user.html', {
      session: req.session.user,
      user: user
    });
  });
};

// 由 GET 显示创建用户的表单
exports.user_create_get = function (req, res, next) {
  res.render('signup.html')
};

// 由 POST 处理用户创建操作
exports.user_create_post = function (req, res, next) {
  // 1. 获取表单提交的数据
  //    req.body
  // 2. 操作数据库
  //    判断改用户是否存在
  //    如果已存在，不允许注册
  //    如果不存在，注册新建用户
  // 3. 发送响应
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) {
      return res.status(200).json({
        err_code: 500,
        message: err.message
      })
    }
    if (user) {
      // 邮箱已存在
      return res.status(200).json({
        err_code: 1,
        message: '邮箱已存在！'
      })
    }
    User.findOne({
      loginname: req.body.username
    }, function (err, user) {
      if (err) {
        return res.status(200).json({
          err_code: 500,
          message: err.message
        })
      }
      if (user) {
        // 用户名已存在
        return res.status(200).json({
          err_code: 2,
          message: '用户名已存在！'
        })
      }
    });
    // md5 加密
    req.body.password = md5(req.body.password)
    req.body.loginname = req.body.username

    new User(req.body).save(function (err, user) {
      if (err) {
        return res.status(200).json({
          err_code: 500,
          message: err.message
        })
      }
      // 注册成功，使用 session 记录用户的登录状态
      req.session.user = user
      res.status(200).json({
        err_code: 0,
        message: '注册成功！点击跳转到登录页'
      })
    })
  })
};

// 由 GET 显示更新用户的表单
exports.user_update_get = function (req, res, next) {
  res.render('setting.html', { session: req.session.user });
};

// 由 POST 处理用户更新操作
exports.user_update_post = function (req, res, next) {
  var userInfo = {};
  if (req.body.username) userInfo.loginname = req.body.username;
  if (req.body.email) userInfo.email = req.body.email;
  if (req.body.signature) userInfo.signature = req.body.signature;
  if (req.body.password) userInfo.password = md5(req.body.password);
  User.findById(req.session.user._id, function (err, user) {
    if (err) return next(err);
    user.update(userInfo, function (err, data) {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};