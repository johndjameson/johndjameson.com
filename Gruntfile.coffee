module.exports = ( grunt ) ->

  grunt.loadNpmTasks( 'grunt-svgstore' )

  grunt.initConfig

    svgstore   :
      default  :
        files  :
          'source/assets/images/icons/icons.svg' : [ 'source/assets/images/icons/icon-*.svg' ]

  grunt.registerTask( 'default', [ 'svgstore' ] )
