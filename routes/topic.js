var express = require('express');
var router = express.Router();

// 导入控制器模块
var topic_controller = require('../controllers/topicController');

/// 话题路由 ///

// GET 请求添加新的话题。注意此项必须位于显示话题的路由（使用了 id）之前。
router.get('/create', topic_controller.topic_create_get);

// POST 请求添加新的话题
router.post('/create', topic_controller.topic_create_post);

// GET 请求话题
router.get('/:id', topic_controller.topic_detail);

// POST 请求删除话题
router.post('/:id/delete', topic_controller.topic_delete);

// GET 请求更新话题
router.get('/:id/update', topic_controller.topic_update_get);

// POST 请求更新话题
router.post('/:id/update', topic_controller.topic_update_post);

module.exports = router;
