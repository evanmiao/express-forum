const user = require('../models/user');

// 为每位用户显示详细信息的页面
exports.user = function(req, res) { res.send('未实现：用户详细信息：' + req.params.id); };

// 由 GET 显示创建用户的表单
exports.user_create_get = function(req, res) { res.send('未实现：用户创建表单的 GET'); };

// 由 POST 处理用户创建操作
exports.user_create_post = function(req, res) { res.send('未实现：创建用户的 POST'); };

// 由 GET 显示删除用户的表单
exports.user_delete_get = function(req, res) { res.send('未实现：用户删除表单的 GET'); };

// 由 POST 处理用户删除操作
exports.user_delete_post = function(req, res) { res.send('未实现：删除用户的 POST'); };

// 由 GET 显示更新用户的表单
exports.user_update_get = function(req, res) { res.send('未实现：用户更新表单的 GET'); };

// 由 POST 处理用户更新操作
exports.user_update_post = function(req, res) { res.send('未实现：更新用户的 POST'); };