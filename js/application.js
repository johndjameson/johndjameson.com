var $window = $(window),
    $document = $(document),
    // $html = $('html'),
    $post = $('.post'),
    $sups = $('.post sup'),
    $footnotes = $('.post-footnotes');
    
// var commentsExist = false;

function createSidenotes() {
  var $footnoteArray = $footnotes.children();

  $sups.parent().wrap("<div class='post-subject'></div>");

  for (var i = 0; i < $sups.length; i++) {
    $($('.post-subject')[i]).append("<aside class='post-sidenote'><p>" + $($footnoteArray[i]).html() + "</p></aside>");
    $('.post-sidenote').siblings().css({
      marginBottom: 0
    });
  }
}

function toggleNotes() {
  $('#dev_log').html($window.width() + "px, " + $window.width()/16 + "em");

  if ($footnotes.length > 0 && $sups.length > 0) {
    $post.addClass('has-sidenotes');
  }
}

$document.ready(function() {
  createSidenotes();
  toggleNotes();
});

$window.resize(function() {
  toggleNotes();
});

// $(window).scroll(function() {
//   if (!commentsExist) {
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
//      commentsExist = true;

//      $('article.post').append('<div id="disqus_thread"></div>');
//      $('body').append('<script async src="/js/disqus.js"></script>');
//    }
//  }
// });