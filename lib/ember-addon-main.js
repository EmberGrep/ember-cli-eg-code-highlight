'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLICodeHighlight(project) {
  this.project = project;
  this.name    = 'Ember CLI EG-CODE-HIGHLIGHT';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLICodeHighlight.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-super-number', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLICodeHighlight.prototype.initializeOptions = function() {
  this.options = {
    style: this.app.options.egCodeHighlight || 'default',
  };
};

EmberCLICodeHighlight.prototype.included = function included(app) {
  this.app = app;
  this.initializeOptions();
  var styleCss = 'vendor/ember-cli-super-number/styles/' + this.options.style + '.css';


  this.app.import('vendor/highlightjs/highlight.pack.js');
  this.app.import(styleCss);
  this.app.import('vendor/eg-code-highlight/styles/numbering.css');
};

module.exports = EmberCLICodeHighlight;
