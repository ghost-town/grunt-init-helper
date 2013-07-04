/*
 * grunt-init-helper
 * https://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Grunt init template for creating Assemble helpers.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'For more information about creating Assemble projects, ' +
  'please see the docs at http://assemble.io/docs/';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Visit http://assemble.io/docs/Helpers for more information ' +
  'about creating, installing and using helpers.';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'assemble'}, [
    // Prompt for these values.
    init.prompt('name')
  ], function(err, props) {

    // Actually copy (and process) files.
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};