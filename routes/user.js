var express = require('express');
var router = express.Router();

// 导入控制器模块
var user_controller = require('../controllers/userController');

/// 用户路由 ///

// GET 请求用户
router.get('/:id', user_controller.user);

// GET 请求删除用户
router.get('/:id/delete', user_controller.user_delete_get);

// POST 请求删除用户
router.post('/:id/delete', user_controller.user_delete_post);

// GET 请求更新用户
router.get('/:id/update', user_controller.user_update_get);

// POST 请求更新用户
router.post('/:id/update', user_controller.user_update_post);

module.exports = router;
