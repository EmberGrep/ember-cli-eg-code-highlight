/* jshint node: true */
'use strict';
var path = require('path');
var find = require('broccoli-stew').find;
var log = require('broccoli-stew').log;

module.exports = {
  name: 'ember-highlight-js',

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    var config = this.app.project.config().emberHighlightJs || {};
    var style = config.style;

    if (style) {
      app.import('vendor/highlight.js/styles/' + style + '.css');
    }

    app.import('vendor/highlight.js/index.js', {
      exports: {
        'highlight.js': [
          'default',
          'highlight',
          'highlightAuto',
          'highlightBlock'
        ]
      }
    });

    if (style) {
      app.import('vendor/highlight.js/styles/' + style + '.css')
    }
  }
};
