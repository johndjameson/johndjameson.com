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
        page : 'all'
        run  : -> JDJ.Pages.All()
      },
      {
        page : 'article'
        run  : -> JDJ.Pages.Article()
      }
    ]
