# *************************************
#
#   Document Ready
#
# *************************************

jQuery ($) ->

  # -------------------------------------
  #   Dispatcher
  # -------------------------------------

  new JDJ.Classes.Dispatcher
    events : [
      {
        page : 'article'
        run  : -> JDJ.Pages.Article()
      }
    ]

  # -------------------------------------
  #   Global
  # -------------------------------------

  # ----- Services ----- #

  JDJ.fixOrphanWords()

  JDJ.injectSvg
    assetPath : '/assets/images/icons/icons.svg'

