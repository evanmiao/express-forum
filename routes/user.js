var express = require('express');
var router = express.Router();

// 导入控制器模块
var user_controller = require('../controllers/userController');

/// 用户路由 ///

// GET 请求用户
router.get('/:id', user_controller.user);

module.exports = router;
