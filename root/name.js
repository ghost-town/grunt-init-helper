(function() {
  'use strict';

  module.exports.register = function(Handlebars, options) {

    /**
     * Helper name
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    Handlebars.registerHelper('{%= name %}', function(str) {
      var content = '<strong>' + str + '</strong>';
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);
