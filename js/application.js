(function() {
    var $window = $(window),
        $document = $(document),
        $post = $('.post'),
        $sups = $('.post sup'),
        $footnotes = $('.post-footnotes'),
        $disqus = $('#disqus_thread');


    /*  Footnotes/Sidenotes
    ==================================================*/

    function createSidenotes() {
        var $footnoteArray = $footnotes.children();

        $sups.parent().wrap("<div class='post-subject'></div>");

        for (var i = 0; i < $sups.length; i++) {
            $($('.post-subject')[i]).append("<aside class='post-sidenote' role='complementary'><p>" + $($footnoteArray[i]).html() + "</p></aside>");
        }
    }

    function toggleNotes() {
        if ($footnotes.length > 0 && $sups.length > 0) {
            $post.addClass('has-sidenotes');
        }
    }


    /*  Event Listeners
    ==================================================*/

    $document.ready(function() {
        createSidenotes();
        toggleNotes();
    });

    $window.resize(function() {
        devResize();
    });
}());