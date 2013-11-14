(function() {
    var $window = $(window),
    $document = $(document),
    $post = $('.post'),
    $sups = $('.post sup'),
    $footnotes = $('.post-footnotes');

    /*  Developer Tools
    ==================================================*/

    function devResize() {
        $('#dev_log').html($window.width() + "px, " + $window.width()/16 + "em");
    }
        
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
        if ($footnotes.length > 0 && $sups.length > 0) {
        $post.addClass('has-sidenotes');
        }
    }

    // this works because div#disqus_thread is only on post pages
    function createComments() {
        var disqus_shortname = 'johndjameson',
            dsq = document.createElement('script');
            dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';

        (document.getElementsByTagName('body')[0]).appendChild(dsq);
    }

    $document.ready(function() {
        createSidenotes();
        createComments();
        toggleNotes();
    });

    $window.resize(function() {
        devResize();
    });
}());