# *************************************
#
#   Heading Link
#   -> Section title anchor
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************
#
#   Notes
#   1. <input> can't be copied, forces zoom on iOS
#   2. Selection ranges don't highlight on iOS, though they exist in the selection object.
#
# *************************************

@JDJ.Modules.headingLink = do ->

  # -------------------------------------
  #   Private Variables
  # -------------------------------------

  _settings = {}

  # -------------------------------------
  #   Initialize
  # -------------------------------------

  init = ( options ) ->
    _settings = $.extend
      $element  : $( '.js-headingLink' )
      linkClass : '.js-headingLink-link'
      urlClass  : '.js-headingLink-url'
    , options

    _generateMarkup()

    unless Modernizr.touchevents
      _updateSettings()
      _setEventHandlers()

  # -------------------------------------
  #   Set Event Handlers
  # -------------------------------------

  _setEventHandlers = ->

    _settings.$link.on 'click', ( event ) ->
      event.preventDefault()

      _toggleSelection( true, $(@).closest( '.js-headingLink' ) )

    _settings.$url.on 'blur', ( event ) ->
      _toggleSelection( false, $(@).closest( '.js-headingLink' ) )

  # -------------------------------------
  #   Generate Markup
  # -------------------------------------

  _generateMarkup = ->
    url = window.location.origin + window.location.pathname

    _settings.$element.each ( index ) ->
      $heading = $(@)
      text     = $heading.text()
      slug     = JDJ.Helpers.slugify( text )

      $heading.addClass( 'headingLink-heading' )
      $heading.wrap( "<div id='#{ slug }' class='headingLink js-headingLink'></div>" )

      $element = $heading.parent()

      $heading.empty()
      $heading.append( "<a href='##{ slug }' class='headingLink-heading-link js-headingLink-link'>#{ text }</a>" )

      unless Modernizr.touchevents
        $element.append( "<input class='headingLink-url js-headingLink-url' type='text' value='#{ url }##{ slug }' readonly />" )

  # -------------------------------------
  #   Toggle Selection
  # -------------------------------------

  _toggleSelection = ( isSelecting, $element ) ->
    $url = $element.find( _settings.urlClass )

    if isSelecting
      $element.addClass( 'is-active' )
      $url.trigger( 'focus' ).trigger( 'select' )
    else
      $element.removeClass( 'is-active' )

  # -------------------------------------
  #   Update Settings
  # -------------------------------------

  _updateSettings = ->
    _settings.$link = $( _settings.linkClass )
    _settings.$url  = $( _settings.urlClass )

  # -------------------------------------
  #   Public Methods
  # -------------------------------------

  init: init

# -------------------------------------
#   Usage
# -------------------------------------
#
# JDJ.Modules.headingLink.init()
#
