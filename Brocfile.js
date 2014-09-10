/* global require, module */

var mergeTrees = require('broccoli-merge-trees');

var appTree    = mergeTrees(['app', 'app-addon'], { overwrite: true });
var vendorTree = mergeTrees(['vendor', 'vendor-addon']);
var templateTree = mergeTrees(['app/templates', 'templates-addon']);

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  trees: {
    app: appTree,
    templates: templateTree,
    vendor: vendorTree
  }
});

app.import('vendor/bootstrap/dist/css/bootstrap.css');
app.import('vendor/highlightjs/highlight.pack.js');
app.import('vendor/highlightjs/styles/github.css');
app.import('vendor/eg-code-highlight/styles/numbering.css');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
