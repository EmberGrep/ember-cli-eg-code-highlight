/* jshint undef: false */

define('highlightjs', [], function() {
  'use strict';

  return {
    'default': hljs,
    'highlight': hljs.highlight,
    'highlightAuto': hljs.highlightAuto
  };
});
