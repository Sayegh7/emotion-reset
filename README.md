# emotion-reset

Reset file for [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library.

The original `reset.css` is pulled from [shannonmoeller/reset.css](https://github.com/shannonmoeller/reset-css), and parsed into emotion ready format.

## Usage

**_IMPORTANT! For emotion versions older than 10, use emotion-reset v1.0.4 and refer to this [README](https://github.com/Sayegh7/emotion-reset/blob/e228261a0bd7a3d7d06bfdf6457576b647ad2e6f/README.md) for usage instructions_**.

```sh
npm install --save emotion-reset
```

### JavaScript

```js
// global.js - place in your app where global styles reside
import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/core';

render(
  <Global styles={css`
    ${emotionReset}

    // You can continue writing global styles, for instance
    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
    ...
  `} />
);
```

## License

The [MIT License](LICENSE)

## Credits

This package is heavily inspired/stolen from [emotion-normalize](https://www.npmjs.com/package/emotion-normalize).
