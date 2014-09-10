#h1 eg-code-highlight</h1>

A quick and easy to use code highlighting component for Ember using <a href="https://highlightjs.org/">highlight.js</a>

##Installation

To install `eg-code-highlight` simply run `npm install ember-cli-eg-code-highlight --save-dev`.

##Use

Using `eg-code-highlight` is incredibly easy!
The `eg-code-highlight` component takes too arguments: `code` and `language`.
To create this, in your template you can do this.

    {{eg-code-highlight code=codeHighlightExample language='hbs'}}

This works for multiple languages, the controller for this example is:

    import Ember from 'ember';
    import codeHighlightExample from 'ember-cli-eg-code-highlight/text/code-highlight-example';
    import controllerCode from 'ember-cli-eg-code-highlight/text/controller-code';

    export default Ember.Controller.extend({
      codeHighlightExample: codeHighlightExample,
      controllerCode: controllerCode
    });
