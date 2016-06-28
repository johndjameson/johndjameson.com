# *************************************
#
#   Home
#   -> Dispatch events
#
# *************************************

@JDJ.Pages.Home = ->

  # -------------------------------------
  #   Inbox
  # -------------------------------------

  $( '.js-heroSticker' ).html( JDJ.Helpers.randomize( [
    'Amper&shy;sands'
    'Cool Code'
    'Font Stuff'
    'SVG Maybe'
    'Style Sheets'
  ] ) )
