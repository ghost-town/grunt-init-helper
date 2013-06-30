/*
 * {%= name %}
 * https://github.com/{%= author_name %}/{%= name %}
 * Copyright (c) {%= grunt.template.today('yyyy') %} 
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'helper*.js',
        'test/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    assemble: {
      pages: {
        options: {
          flatten: true,
          helpers: ['test/helper-example.js', 'helper-{%= helper_name %}.js'],
          data: 'test/example.json'
        },
        files: {
          'test/': ['test/example.hbs']
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default',  ['jshint', 'assemble']);
};

