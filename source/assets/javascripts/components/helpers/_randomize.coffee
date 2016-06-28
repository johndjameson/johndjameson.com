# *************************************
#
#   Randomize
#   -> Select a random value
#
# *************************************
#
# @param collection { array }
#
# *************************************

@JDJ.Helpers.randomize = ( collection ) ->
  randomNumber = Math.floor( Math.random() * collection.length )
  return collection[ randomNumber ]

# -------------------------------------
#   Usage
# -------------------------------------
#
# collection = [ 'one', 'two', 'three' ]
# JDJ.Helpers.randomize( collection )
#
