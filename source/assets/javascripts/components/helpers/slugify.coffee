# *************************************
#
#   Slugify
#   -> Convert a string to a URL-friendly slug
#
# *************************************
#
# @param string { string }
#
# *************************************

@JDJ.Helpers.slugify = ( string ) ->
  string
    .toLowerCase()
    .replace( /[^\w ]+/g, '' )
    .replace( /\s+/g, '-' )

# -------------------------------------
#   Usage
# -------------------------------------
#
# string = 'This is my string!'
# JDJ.Helpers.slugify( string )
#
