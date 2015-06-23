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

  JDJ.Modules.sidenotes.init
    $notes        : $( '.footnotes' ).find( 'p' )
    $markers      : $( '[ id^="fnref" ]' )
    sidenoteClass : 'post-sidenote'

  # -------------------------------------
  #   Services
  # -------------------------------------

  JDJ.Services.prefixClasses
    $element : $( '.js-syntax' )
    prefix   : 'syntax'
