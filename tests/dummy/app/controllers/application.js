import Ember from 'ember';
import config from 'dummy/config/environment';

export default Ember.Controller.extend({
  file:  'import foo from "bar"',
  languages: config.languages,
  language: 'javascript',

  actions: {
    setLanguage(language) {
      this.set('language', language);
    },
  },
});
