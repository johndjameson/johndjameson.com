#-------------------------------------
#  Document Ready
#-------------------------------------

jQuery ($) ->

  JDJ.sidenotes.init
    notes         : $('.footnotes').find('p')
    markers       : $('[id^="fnref"]')
    sidenoteClass : 'post-sidenote'

  $( '.js-syntax' ).find( '[class]' ).each ->
    node           = @
    node.className = "syntax-#{ node.className }"
