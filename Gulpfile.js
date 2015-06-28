// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp icons`
//
// *************************************

// -------------------------------------
//   Plugins
// -------------------------------------
//
// gulp              : The streaming build system
// gulp-cheerio      : Manipulate HTML and XML files
// gulp-load-plugins : Automatically load Gulp plugins
// gulp-rename       : Rename files
// gulp-svgmin       : Minify SVG files
// gulp-svgstore     : Combine SVG files into one
//
// -------------------------------------

var gulp    = require( 'gulp' ),
    plugins = require( 'gulp-load-plugins' )();

// -------------------------------------
//   Options
// -------------------------------------

var options = {

  // ----- Icons ----- //

  icons : {
    files       : 'source/assets/images/icons/_icon-*.svg',
    file        : 'icons.svg',
    destination : 'source/assets/images/icons'
  }

};

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
