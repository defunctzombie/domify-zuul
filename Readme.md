# domify [![Build Status](https://travis-ci.org/defunctzombie/domify-zuul.png?branch=master)](https://travis-ci.org/defunctzombie/domify-zuul)

  Turn HTML into DOM elements x-browser.

```js
domify('<p>Hello</p><p>World</p>')
// => [<p>Hello</p><p>World</p>]
```

## Running tests

Tests can be run locally in the browser or in the cloud using [zuul](https://github.com/defunctzombie/zuul)

```
$ zuul --local 9000 -- test
```

## License

  MIT
