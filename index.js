/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-highlight-js',

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    var config = this.app.project.config().emberHighlightJs || {};
    var style = config.style;

    if (style) {
      app.import(app.bowerDirectory + '/highlightjs/styles/' + style + '.css');
    }

    app.import(app.bowerDirectory + '/highlightjs/highlight.pack.js');
    app.import('vendor/highlight-js-shim.js', {
      exports: {
        'highlightjs': [
          'default',
          'highlight',
          'highlightAuto'
        ]
      }
    });
  }
};
