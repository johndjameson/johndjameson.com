# *************************************
#
#   Document Ready
#
# *************************************

jQuery ($) ->

  # ----- Functions ----- #

  JDJ.fixOrphanWords()

  JDJ.injectSvg
    assetPath    : '/assets/images/icons/icons.svg'
    elementClass : 'dn'

  # ----- Modules ----- #

  JDJ.sidenotes.init
    $notes        : $( '.footnotes' ).find( 'p' )
    $markers      : $( '[ id^="fnref" ]' )
    sidenoteClass : 'post-sidenote'

  # ----- Miscellaneous ----- #

  $( '.js-syntax' ).find( '[ class ]' ).each ->
    node           = @
    node.className = "syntax-#{ node.className }"
