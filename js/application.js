(function() {
    var $window = $(window),
        $document = $(document),
        $post = $('.post'),
        $sups = $('.post sup'),
        $footnotes = $('.post-footnotes'),
        $disqus = $('#disqus_thread');


    /*  Developer Tools
    ==================================================*/

    function devResize() {
        $('#dev_log').html($window.width() + "px, " + $window.width()/16 + "em");
    }


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


    /*  Disqus
    ==================================================*/

    function createComments() {
        var disqus_shortname = 'johndjameson',
            dsq = document.createElement('script');
            dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';

        if ($disqus.length > 0) {
            (document.getElementsByTagName('body')[0]).appendChild(dsq);
        }
    }


    /*  Event Listeners
    ==================================================*/

    $document.ready(function() {
        createSidenotes();
        createComments();
        toggleNotes();
    });

    $window.resize(function() {
        devResize();
    });
}());