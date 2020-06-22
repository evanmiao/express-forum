var template = require('art-template');

// 处理返回的 last_reply
template.defaults.imports.dateFormat = function (str) {
  if (!str) return ''
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return ''
  } else if ((time / 1000) < 30) {
    return '刚刚'
  } else if ((time / 1000) < 60) {
    return parseInt((time / 1000)) + ' 秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + ' 分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt((time / 3600000)) + ' 小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt((time / 86400000)) + ' 天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt((time / 2592000000)) + ' 个月前'
  } else if ((time / 2592000000 / 12) > 0) {
    return parseInt((time / 2592000000 / 12)) + ' 年前'
  }
};

// 处理显示板块类型的文字
template.defaults.imports.tabFormat = function (post) {
  if (post.good === true) {
    return '精华'
  } else if (post.top === true) {
    return '置顶'
  } else if (post.tab === 'ask') {
    return '问答'
  } else if (post.tab === 'share') {
    return '分享'
  } else {
    return '招聘'
  }
};

module.exports = template;