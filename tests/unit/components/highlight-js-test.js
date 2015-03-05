import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('highlight-js', 'HighlightJsComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders and toggles language', function() {
  expect(6);

  // creates the component instance
  var component = this.subject({
    lang: 'javascript',
    code: 'import foo from "bar"'
  });

  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();

  equal(component._state, 'inDOM');
  equal(component.$('.hljs-string').text(), '"bar"');

  ok(component.$().is('.javascript'), 'expect class `.javascript` is present');

  Ember.run(component, 'set', 'lang', 'erlang');

  ok(!component.$().is('.javascript'), 'did NOT expect class `.javascript` is present');
  ok(!component.$().is('.erlange'), 'expect class `.erlang` is present');
});

test('it renders and toggles lineNumbers', function() {
  expect(6);

  // creates the component instance
  var component = this.subject({
    lang: 'javascript',
    code: 'import foo from "bar"',
    hasLineNumbers: true
  });

  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();

  equal(component._state, 'inDOM');


  equal(component.$('.ember-highlight-line-numbers li').text(), '12');
  Ember.run(component, 'set', 'hasLineNumbers', false);
  equal(component.$('.ember-highlight-line-numbers li').length, 0);
  Ember.run(component, 'set', 'hasLineNumbers', true);
  equal(component.$('.ember-highlight-line-numbers li').text(), '12');
  Ember.run(component, 'set', 'code', 'a\nb\n');
  equal(component.$('.ember-highlight-line-numbers li').text(), '1234');
});
