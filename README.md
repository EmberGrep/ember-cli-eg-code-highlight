# Ember-highlight-js


## Installation

* `npm install --save-dev ember-highlight-js`

## Usage

```js
{{highlight-js code=file lang=language hasLineNumbers=hasLineNumbers}}
```

Configuring the styles:

```js

ENV.emberHighlightJs: {
  style: 'arta'
};

...
```

## Development

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
