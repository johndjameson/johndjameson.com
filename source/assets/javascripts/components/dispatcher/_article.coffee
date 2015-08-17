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
