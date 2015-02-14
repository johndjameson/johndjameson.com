# *************************************
#
#   Fix Orphan Words
#   -> Adds non-breaking space to prevent orphan words
#      Credit: http://css-tricks.com/snippets/jquery/add-non-breaking-space-on-title-to-prevent-widows
#
# *************************************
#
# @param $element { jQuery object }
#
# *************************************

@JDJ.fixOrphanWords = ( options ) ->
  settings = $.extend
    $element : $( '.js-orphan' )
  , options

  settings.$element.each ->
    $element   = $(@)
    wordArray  = $element.text().split( ' ' )
    finalTitle = ''

    for index in [ 0..wordArray.length - 1 ]

      finalTitle += wordArray[ index ]

      if index is ( wordArray.length - 2 )
        finalTitle += '&nbsp;'
      else if index is ( wordArray.length - 1 )
        finalTitle += ''
      else
        finalTitle += ' '

    $element.html( finalTitle )

# -------------------------------------
#   Usage
# -------------------------------------
#
# Spellbook.fixOrphanWords()
#
