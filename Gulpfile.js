// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp build`
//   `gulp modernizr`
//
// *************************************

// -------------------------------------
//   Plugins
// -------------------------------------
//
// gulp              : The streaming build system
// gulp-file         : Create files from a string or buffer
// gulp-load-plugins : Automatically load Gulp plugins
// modernizr         : Browser feature detection
//
// -------------------------------------

var gulp      = require( 'gulp' ),
    modernizr = require( 'modernizr' ),
    plugins   = require( 'gulp-load-plugins' )();

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  // ----- Build ----- //

  build : {
    tasks : [ 'modernizr' ]
  },

  // ----- Modernizr ----- //

  modernizr : {
    config      : require( './modernizr.json' ),
    file        : '_modernizr-custom.js',
    destination : 'source/assets/javascripts/vendor'
  }

};

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task( 'build', function() {

  options.build.tasks.forEach( function( task ) {
    gulp.start( task );
  } );

} );

// -------------------------------------
//   Task: Modernizr
// -------------------------------------

gulp.task( 'modernizr', function() {

  modernizr.build( options.modernizr.config, function( result ) {
    plugins.file( options.modernizr.file, result )
     .pipe( gulp.dest( options.modernizr.destination ) )
  } );

});
