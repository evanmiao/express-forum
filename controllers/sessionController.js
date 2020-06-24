var User = require('../models/user');
var md5 = require('blueimp-md5');

// 由 GET 显示用户登录的表单
exports.user_signin_get = function (req, res, next) {
  res.render('signin.html')
};

// 由 POST 处理用户登录操作
exports.user_signin_post = function (req, res, next) {
  // 1. 获取表单数据
  // 2. 查询数据库用户名密码是否正确
  // 3. 发送响应数据
  User.findOne({
    $or: [{
      email: req.body.username
    }, {
      loginname: req.body.username
    }],
    password: md5(req.body.password)
  }, function (err, user) {
    if (err) {
      return res.status(200).json({
        code: 500,
        message: err.message
      })
    }
    if (!user) {
      return res.status(200).json({
        err_code: 1,
        message: '用户名或者密码错误'
      });
    }
    req.session.user = user;
    res.status(200).json({
      err_code: 0,
      message: '登录成功'
    });
  });
};

// 用户退出操作
exports.user_signout_get = function (req, res, next) {
    // 清除登录状态
    req.session.user = null;
    // 重定向到登录页
    res.redirect('/signin');
};