'use strict';

/* TO-DO
   * Separate development and distribution files/directories
   * Speed up Jekyll with LiveReload
   * Add 'lint' command
     - CSSLint
     - CSSCSS
     - JSHint
     - Minification statistics
*/

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: {
      app: 'app',
      dist: 'dist'
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      markup: {
        files: [
          '<%= yeoman.app %>/**/*.{html,md,php,xml}'
        ],
        tasks: ['clean', 'jekyll', 'copy', 'sass', 'autoprefixer']
      },
      sass: {
        files: [
          '<%= yeoman.app %>/_sass/**/*.{scss,sass}'
        ],
        tasks: ['sass', 'autoprefixer']
      },
      javascript: {
        files: [
          '<%= yeoman.app %>/js/**/*.js'
        ],
        tasks: ['copy']
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*'
          ]
        }]
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            'img/**/*',
            'includes/**/*',
            'js/**/*',
            '!**/_*{,/**}' // not underscored files/directories
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_sass',
          src: '**/*.{scss,sass}',
          dest: '<%= yeoman.dist %>/css',
          ext: '.css'
        }]
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      single_file: {
        expand: true,
        cwd: '<%= yeoman.dist %>/css',
        src: 'application.css',
        dest: '<%= yeoman.dist %>/css'
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= yeoman.dist %>/css',
        src: '*.css',
        dest: '<%= yeoman.dist %>/css',
        ext: '.min.css'
      }
    },

    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    }
  });


  // Define Tasks

  grunt.registerTask('dev', [
    'clean',
    'jekyll',
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jekyll',
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'svgmin',
    'imagemin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
