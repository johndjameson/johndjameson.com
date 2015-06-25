# *************************************
#
#   All
#   -> Dispatch events
#
# *************************************

@JDJ.Pages.All = ->

  # -------------------------------------
  #   Services
  # -------------------------------------

  JDJ.Services.fixOrphanWords()

  JDJ.Services.injectSvg
    assetPath : '/assets/images/icons/icons.svg'
