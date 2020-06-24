var express = require('express');
var router = express.Router();

// 导入控制器模块
var session_controller = require('../controllers/sessionController');
var user_controller = require('../controllers/userController');
var topic_controller = require('../controllers/topicController');

// 主页路由 显示话题列表
router.get('/', topic_controller.topic_list);

// “关于页面”路由
router.get('/about', function (req, res, next) {
  res.render('about.html', { session: req.session.user })
});

// 注册
router.get('/signup', user_controller.user_create_get);
router.post('/signup', user_controller.user_create_post);

// 登录
router.get('/signin', session_controller.user_signin_get);
router.post('/signin', session_controller.user_signin_post);

// 设置
router.get('/setting', user_controller.user_update_get);
router.post('/setting', user_controller.user_update_post);

// 退出
router.get('/signout', session_controller.user_signout_get);

module.exports = router;