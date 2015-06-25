module.exports = ( grunt ) ->

  grunt.loadNpmTasks( 'grunt-svgstore' )

  grunt.initConfig

    svgstore                  :
      default                 :
        options               :
          cleanup             : [ 'fill' ]
          includeTitleElement : false
          convertNameToId     : ( name ) ->
            dotPosition = name.indexOf( '.' )

            if dotPosition > -1
              console.log 'something'
              name = name.substring( 0, dotPosition )

            return name.replace( /^_/, '' )
        files                 :
          'source/assets/images/icons/icons.svg' : [ 'source/assets/images/icons/_icon-*.svg' ]

  grunt.registerTask( 'default', [ 'svgstore' ] )
