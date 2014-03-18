'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: {
      app: 'app',
      dist: 'dist'
    },

    concurrent: {
      dist: [
        'sass',
        'copy'
      ]
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
      sass: {
        files: [
          '<%= yeoman.app %>/_sass/**/*.{scss,sass}'
        ],
        tasks: ['sass', 'autoprefixer']
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
            'fonts/**/*',
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
    'concurrent',
    'autoprefixer',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jekyll',
    'concurrent', // sass & copy
    'autoprefixer',
    'cssmin',
    'svgmin',
    'imagemin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
