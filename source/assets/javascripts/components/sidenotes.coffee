# -------------------------------------
#   Sidenotes
#   -> Converts post footnotes to sidenotes
# -------------------------------------

@JDJ.sidenotes = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings =

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = (options) ->
    _settings = $.extend
      element             : $('.js-sidenotes')
      notes               : $('.js-sidenotes-note')
      markers             : $('.js-sidenotes-marker')
      elementContextClass : 'has-sidenotes'
      noteContextClass    : 'has-sidenote'
      sidenoteClass       : 'sidenote'
    , options

    createSidenotes()
    toggleNotes()

  # -------------------------------------
  #   Create Sidenotes
  # -------------------------------------

  createSidenotes = ->
    _settings.markers.parent().wrap("<div class='#{ _settings.noteContextClass }'></div>")

    for index in [ 0..._settings.markers.length ]
      content = $( _settings.notes[index] )
                .html()
                .replace( /&nbsp;<a href=.#fn.*<\/a>/, '' )

      $( $(".#{ _settings.noteContextClass }")[index] )
        .append("<aside class='#{ _settings.sidenoteClass }' role='complementary'><p>#{ content }</p></aside>")

  # -------------------------------------
  #   Toggle Notes
  # -------------------------------------

  toggleNotes = ->
    if _settings.notes.length > 0 and _settings.markers.length > 0
      _settings.element.addClass( _settings.elementContextClass )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# JDJ.sidenotes.init()
#
