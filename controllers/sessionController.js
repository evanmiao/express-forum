exports.signin = function (req, res, next) {
  res.render('signin.html')
};

exports.signout = function (req, res, next) {
  res.send('未实现：用户退出');
};