'use strict';

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  // require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: {
      app: 'app',
      dist: 'dist'
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
            // Jekyll processes and moves HTML and text files.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
            // Explicitly add any files your site needs for distribution here.
            //'_bower_components/jquery/jquery.js',
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/_bower_components'
      },
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
            flatten: true,
            src: '<%= yeoman.dist %>/css/application.css',
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
    }
  });

  // Define Tasks

  grunt.registerTask('build', [
    'clean',
    'jekyll',
    'sass',
    'autoprefixer',
    'cssmin',
    'copy'
    ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
