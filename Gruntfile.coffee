module.exports = ( grunt ) ->

  grunt.loadNpmTasks( 'grunt-svgstore' )

  grunt.initConfig

    svgstore                  :
      default                 :
        options               :
          cleanup             : [ 'fill' ]
          includeTitleElement : false
        files                 :
          'source/assets/images/icons/icons.svg' : [ 'source/assets/images/icons/icon-*.svg' ]

  grunt.registerTask( 'default', [ 'svgstore' ] )
