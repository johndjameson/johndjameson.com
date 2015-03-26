# *************************************
#
#   Inject SVG
#   -> Asynchronously append an SVG
#
# *************************************
#
# @param assetPath    { string }
# @param elementClass { string }
#
# *************************************

@JDJ.injectSvg = ( options ) ->
  settings = $.extend
    assetPath    : null
    elementClass : null
  , options

  $.get settings.assetPath, ( data ) ->
    $element = $( "<div class='#{ options.elementClass }'></div>" )
    svg      = new XMLSerializer().serializeToString( data.documentElement )

    $element.html( svg ).appendTo( 'body' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# JDJ.injectSvg
#   assetPath : 'assets/images/filename.svg'
#
