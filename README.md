# emotion-reset
[![npm version](https://badge.fury.io/js/emotion-reset.svg)](https://badge.fury.io/js/emotion-reset)
![npm](https://img.shields.io/npm/dt/emotion-reset.svg)
![npm](https://img.shields.io/npm/dm/emotion-reset.svg)

Reset file for [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library.

The original `reset.css` is pulled from [kossnocorp/reset.css](https://github.com/kossnocorp/reset.css), and parsed into emotion ready format.

## Version Compatibility

This table indicates the latest versions of `emotion-reset` supporting each emotion version. 

| emotion-reset | emotion | @emotion/core | @emotion/react |
|--------------:|--------------:|---------------:|---------------:|
|[1.0.4](https://github.com/Sayegh7/emotion-reset/blob/e228261a0bd7a3d7d06bfdf6457576b647ad2e6f/README.md) | <10 |  -- | -- |
|[2.0.7](https://github.com/Sayegh7/emotion-reset/blob/4f426b5e4f11db9853cd0fb2a49574e4003b8c1e/README.md) | -- |  >=10 | -- |
|[>=3.0.0](https://github.com/Sayegh7/emotion-reset/blob/dev/README.md) | -- | -- | >=11 |
 
## Usage

```sh
npm install --save emotion-reset
```

### JavaScript

```js
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

render(
  <Global styles={css`
    ${emotionReset}

    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
  `} />
);
```

## License

The [MIT License](LICENSE)

## Credits

This package is heavily inspired/stolen from [emotion-normalize](https://www.npmjs.com/package/emotion-normalize).
