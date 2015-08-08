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

  JDJ.Modules.headingLink.init
    $element : $( '.js-has-headingLink' ).find( 'h2, h3' )

  # -------------------------------------
  #   Services
  # -------------------------------------

  JDJ.Services.prefixClasses
    $element : $( '.js-syntax' )
    prefix   : 'syntax'
