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
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      npm: {
        command: 'npm publish'
      },
      bower: {
        command: 'bower register <%= pkg.name %> <%= pkg.repository %> /y'
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
  grunt.loadNpmTasks('grunt-shell');

  // Default tasks to be run.
  grunt.registerTask('default',  ['assemble']);

  // Publish helper to NPM or rgister helper as a 
  // bower component. Delete these after you've used 
  // them, and remove grunt-shell as a dependency.
  grunt.registerTask('publish',  ['shell:npm']);
  grunt.registerTask('register', ['shell:bower']);
};

