import Ember from 'ember';
import layout from '../templates/highlight-js';
import {
  highlight,
  highlightAuto
} from 'highlightjs';

function range(start, count) {
  return Array.apply(0, new Array(count))
    .map(function (element, index) {
      return index + start;
    });
}

export default Ember.Component.extend({
  layout: layout,

  classNameBindings: ['lang'],
  hasLineNumbers: true,
  lineNumbers: Ember.computed('code', function() {
    var code = this.get('code');

    if (code) {
      return Ember.A(range(1, code.split('\n').length + 1));
    } else {
      return Ember.A();
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
