# *************************************
#
#   Article
#   -> Dispatch events
#
# *************************************

@JDJ.Pages.Article = ->

  # -------------------------------------
  #   Modules
  # -------------------------------------

  JDJ.sidenotes.init
    $notes        : $( '.footnotes' ).find( 'p' )
    $markers      : $( '[ id^="fnref" ]' )
    sidenoteClass : 'post-sidenote'

  # -------------------------------------
  #   Services
  # -------------------------------------

  JDJ.prefixClasses
    $element : $( '.js-syntax' )
    prefix   : 'syntax'
