import Ember from 'ember';
import config from 'dummy/config/environment';

export default Ember.Controller.extend({
  file:  'import foo from "bar"',
  languages: Ember.A(config.languages),
  language: 'javascript'
});
