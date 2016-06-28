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
        page : 'home'
        run  : -> JDJ.Pages.Home()
      }
    ]
