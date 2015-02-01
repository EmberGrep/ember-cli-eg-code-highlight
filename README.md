#eg-code-highlight

A quick and easy to use code highlighting component for Ember using <a href="https://highlightjs.org/">highlight.js</a>

##Installation

To install `eg-code-highlight` simply run `npm install ember-cli-eg-code-highlight --save-dev`.

##Use

Using `eg-code-highlight` is incredibly easy!
The `eg-code-highlight` component takes too arguments: `code` and `language`.
To create this, in your template you can do this.

```hbs
{{eg-code-highlight code=codeHighlightExample language='hbs'}}
```

Optionally, show line numbers

```hbs
{{eg-code-highlight code=codeHighlightExample language='hbs' hasLineNumbers=true}}
```

This works for multiple languages, the controller for this example is:

```js
import Ember from 'ember';
import codeHighlightExample from 'ember-cli-eg-code-highlight/text/code-highlight-example';
import controllerCode from 'ember-cli-eg-code-highlight/text/controller-code';

export default Ember.Controller.extend({
  codeHighlightExample: codeHighlightExample,
  controllerCode: controllerCode
});
```
