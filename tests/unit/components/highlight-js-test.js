import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('highlight-js', 'HighlightJsComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders and toggles language', function(assert) {
  assert.expect(6);

  // creates the component instance
  var component = this.subject({
    lang: 'javascript',
    code: 'import foo from "bar"'
  });

  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();

  assert.equal(component._state, 'inDOM');
  assert.equal(component.$('.hljs-string').text(), '"bar"');

  assert.ok(component.$().is('.javascript'), 'expect class `.javascript` is present');

  Ember.run(component, 'set', 'lang', 'bash');

  assert.ok(!component.$().is('.javascript'), 'did NOT expect class `.javascript` is present');
  assert.ok(component.$().is('.bash'), 'expect class `.bash` is present');
});

test('it renders and toggles lineNumbers', function(assert) {
  assert.expect(6);

  // creates the component instance
  var component = this.subject({
    lang: 'javascript',
    code: 'import foo from "bar"',
    hasLineNumbers: true
  });

  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();

  assert.equal(component._state, 'inDOM');


  assert.equal(component.$('.ember-highlight-line-numbers li').text(), '12');
  Ember.run(component, 'set', 'hasLineNumbers', false);
  assert.equal(component.$('.ember-highlight-line-numbers li').length, 0);
  Ember.run(component, 'set', 'hasLineNumbers', true);
  assert.equal(component.$('.ember-highlight-line-numbers li').text(), '12');
  Ember.run(component, 'set', 'code', 'a\nb\n');
  assert.equal(component.$('.ember-highlight-line-numbers li').text(), '1234');
});
