// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp build`
//   `gulp icons`
//   `gulp modernizr`
//
// *************************************

// -------------------------------------
//   Plugins
// -------------------------------------
//
// gulp              : The streaming build system
// gulp-cheerio      : Manipulate HTML and XML files
// gulp-file         : Create files from a string or buffer
// gulp-load-plugins : Automatically load Gulp plugins
// gulp-rename       : Rename files
// gulp-svgmin       : Minify SVG files
// gulp-svgstore     : Combine SVG files into one
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
    tasks : [ 'icons', 'modernizr' ]
  },

  // ----- Icons ----- //

  icons : {
    files       : 'source/assets/images/icons/_icon-*.svg',
    file        : 'icons.svg',
    destination : 'source/assets/images/icons'
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

// -------------------------------------
//   Task: Icons
// -------------------------------------

gulp.task( 'icons', function() {

  gulp.src( options.icons.files )
    .pipe( plugins.rename( function( path ) {
      path.basename = path.basename.replace( /^_/, '' )
    } ) )
    .pipe( plugins.svgmin() )
    .pipe( plugins.svgstore( { inlineSvg: true } ) )
    .pipe( plugins.cheerio( function($) {
      $( '[fill]' ).removeAttr( 'fill' );
      $( '[xmlns]' ).removeAttr( 'xmlns' );
    } ) )
    .pipe( plugins.rename( options.icons.file ) )
    .pipe( gulp.dest( options.icons.destination ) );

});
