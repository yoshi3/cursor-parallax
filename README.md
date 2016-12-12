# cursor-parallax

[![MIT License][license-image]][license-url]

This is a simple parallax library that works with cursor and device orientation.

## Support
It works with ES5 's vanilla JS on browsers supporting `translate3d`.

## Demo
[demo](https://yossiy.github.io/cursor-parallax/test/)

## Usage

### HTML

```html
<div class="parallax-wrapper">
  <!-- set depth 0 ~ 1 -->
  <div class="layer" data-depth="1">
    <!-- something to contents -->
  </div>
  <div class="layer" data-depth=".5">
    <!-- something to contents -->
  </div>
  <div class="layer" data-depth="0">
    <!-- something to contents -->
  </div>
</div>
```

### JS

```javascript
var elm = document.querySelector('.parallax-wrapper');
var cursorParallax = new CursorParallax(elm, {
  easing: 'ease-out',
  duration: '.6s',
  mousemoveRatio: 0.5,
  deviceorientationRatio: 1,
  mousemove: true,
  deviceorientation: true
});
```
## API

- `stop`: stop temporarily
- `start`: restart from stopped state
- `destroy`: unbind all events

## For npm
```
npm install cursor-parallax
```

```javascript
var cursorParallax = new (require('cursor-parallax'))(elm, {options...});
```

## Development

### Setting up
```
npm install
```

### Convert the ES6 code into valid ES5 combining, and put `dist/cursor-parallax.js`
```
`npm bin`/webpack
```

## License
The MIT License (MIT) Copyright (c) 2016 yossiy.


[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE
