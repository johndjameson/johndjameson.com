var Sidenotes = {
  s: {
    post: $('.post'),
    markers: $('.post .post-marker'),
    footnotes: $('.post-footnotes')
  },

  init: function() {
    Sidenotes.createSidenotes();
    Sidenotes.toggleNotes();
  },

  createSidenotes: function() {
    var $footnoteArray = Sidenotes.s.footnotes.children();

    Sidenotes.s.markers.parent().wrap('<div class="post-subject"></div>');

    for (var i = 0; i < Sidenotes.s.markers.length; i++) {
      $($('.post-subject')[i]).append('<aside class="post-sidenote" role="complementary"><p>' + $($footnoteArray[i]).html() + '</p></aside>');
    }
  },

  toggleNotes: function() {
    if (Sidenotes.s.footnotes.length > 0 && Sidenotes.s.markers.length > 0) {
      Sidenotes.s.post.addClass('has-sidenotes');
    }
  }
};

$(function() {
  Sidenotes.init();
});