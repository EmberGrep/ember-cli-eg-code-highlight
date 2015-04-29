/* jshint node: true */
'use strict';

var fs = require('fs');

var languages = fs.readdirSync('node_modules/highlight.js/lib/languages').map(function(language) {
  return language.replace(/\.js$/, '');
});
