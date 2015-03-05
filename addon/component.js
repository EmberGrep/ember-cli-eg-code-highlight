import Ember from 'ember';
import {
  highlight,
  highlightAuto
} from 'highlight.js';

function range(start, count) {
  return Array.apply(0, new Array(count))
    .map(function (element, index) {
      return index + start;
    });
}

export default Ember.Component.extend({
  classNameBindings: ['lang'],
  hasLineNumbers: true,
  lineNumbers: Ember.computed('code', function() {
    var code = this.get('code');

    if (code) {
      return range(1, code.split('\n').length + 1);
    } else {
      return [];
    }
  }).readOnly(),

  highlight: Ember.computed('code', 'lang', function() {
    var lang = this.get('lang');
    var code = this.get('code');

    if (!lang) { throw new Error('highlight-js lang property must be set'); }
    if (lang === 'auto') {
      return highlightAuto(code).value;
    } else {
      return highlight(lang, code).value;
    }
  }).readOnly()
});
