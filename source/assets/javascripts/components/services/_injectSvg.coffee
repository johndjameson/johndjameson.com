# *************************************
#
#   Inject SVG
#   -> Asynchronously append an SVG
#
# *************************************
#
# @param assetPath { string }
#
# *************************************

@JDJ.Services.injectSvg = ( options ) ->
  settings = $.extend
    assetPath : null
  , options

  $.get settings.assetPath, ( data ) ->
    $element = $( new XMLSerializer().serializeToString( data.documentElement ) )

    $element.css( display : 'none' ).appendTo( 'body' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# JDJ.injectSvg
#   assetPath : '/path/to/file.svg'
#
