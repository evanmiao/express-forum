var reg = new RegExp('(^|&)page=([^&]*)(&|$)', 'i');
var r = window.location.search.substring(1).match(reg);

if (r) var page = Number(decodeURI(r[2]));

if (page > 1 && page < 5) {
  $('button.page').removeClass('currentPage');
  $($('button.page')[page - 1]).addClass('currentPage');
} else if (page >= 5) {
  $('button.page').remove();
  for (var i = page + 1; i > page - 4; i--) {
    var newBtn = $('<button class="page">' + i + '</button>');
    $('.pagination button')[2].after(newBtn[0]);
  }
  $($('button.page')[3]).addClass('currentPage');
  $($('.pagination button')[2]).show();
}

$('.pagination').on('click', function (e) {
  if (isNaN(Number(e.target.innerHTML))) {
    switch (e.target.innerHTML) {
      case "上一页":
        $("button.currentPage")
          .prev()
          .click();
        break;
      case "下一页":
        $("button.currentPage")
          .next()
          .click();
        break;
      case "首页":
        $('button.page').remove();
        for (var i = 5; i > 0; i--) {
          var newBtn = $('<button class="page">' + i + '</button>');
          $('.pagination button')[2].after(newBtn[0]);
        }
        $($('button.page')[0]).addClass('currentPage');
        $("button.currentPage").click();
        break;
      default:
        break;
    }
    return;
  }

  if (Number(e.target.innerHTML) === 1) {
    window.location.href = '/'
  } else if (Number(e.target.innerHTML) > 1) {
    window.location.href = '/?page=' + Number(e.target.innerHTML)
  }
});

$($('.toobar span').splice(1)).on('click', function () {
  alert('暂未实现');
});