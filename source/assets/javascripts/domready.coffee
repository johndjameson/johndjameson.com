# *************************************
#
#   Document Ready
#
# *************************************

jQuery ($) ->

  # -------------------------------------
  #   Utilities
  # -------------------------------------

  JDJ.fixOrphanWords()

  JDJ.injectSvg
    assetPath    : '/assets/images/icons/icons.svg'
    elementClass : 'dn'

  JDJ.prefixClasses
    $element : $( '.js-syntax' )
    prefix   : 'syntax'

  # -------------------------------------
  #   Modules
  # -------------------------------------

  JDJ.sidenotes.init
    $notes        : $( '.footnotes' ).find( 'p' )
    $markers      : $( '[ id^="fnref" ]' )
    sidenoteClass : 'post-sidenote'
