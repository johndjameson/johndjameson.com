(function() {
    var $window = $(window),
        $document = $(document),
        $post = $('.post'),
        $markers = $('.post .post-marker'),
        $footnotes = $('.post-footnotes');


    /*  Footnotes/Sidenotes
    ==================================================*/

    function createSidenotes() {
        var $footnoteArray = $footnotes.children();

        $markers.parent().wrap("<div class='post-subject'></div>");

        for (var i = 0; i < $markers.length; i++) {
            $($('.post-subject')[i]).append("<aside class='post-sidenote' role='complementary'><p>" + $($footnoteArray[i]).html() + "</p></aside>");
        }
    }

    function toggleNotes() {
        if ($footnotes.length > 0 && $markers.length > 0) {
            $post.addClass('has-sidenotes');
        }
    }


    /*  Event Listeners
    ==================================================*/

    $document.ready(function() {
        createSidenotes();
        toggleNotes();
    });

}());