'use strict';

/* TO-DO
   * Separate development and distribution files/directories
   * Speed up Jekyll with LiveReload
   * Add 'lint' command
     - CSSLint
     - CSSCSS
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
        tasks: ['clean', 'jekyll:dev', 'copy', 'sass', 'autoprefixer', 'concat']
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
        tasks: ['concat']
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
        src: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },
      dev: {
        options: {
          dest: '<%= yeoman.dist %>',
          drafts: true
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
        ext: '.css'
      }
    },

    concat: {
      post: {
        src: [
          '<%= yeoman.app %>/js/sidenotes.js',
          '<%= yeoman.app %>/js/tabBlock.js',
          '<%= yeoman.app %>/js/application.js'
        ],
        dest: '<%= yeoman.dist %>/js/application.js'
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
          src: '**/*.{gif,jpg,jpeg,png}',
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
    'jekyll:dev',
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jekyll:dist',
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'svgmin',
    'imagemin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
