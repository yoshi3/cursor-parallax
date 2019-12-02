# cursor-parallax

<a href="https://www.npmjs.com/package/cursor-parallax"><img src="https://img.shields.io/npm/v/cursor-parallax.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/cursor-parallax"><img src="https://img.shields.io/npm/l/cursor-parallax.svg" alt="License"></a>

This is a simple parallax library that works with cursor and device orientation.

## Support
It works with ES5 's vanilla JS on browsers supporting `translate3d`.

## Demo
[demo](https://yoshi3.github.io/cursor-parallax/test/)

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
  deviceorientation: true,
});
var elm_requestButton = document.getElementById('requestButton');
if (!cursorParallax.isNeedPermissionOfDeviceOrientationEvent()) {
  console.log(elm_requestButton);
  elm_requestButton.style.display = 'none';
}
// For ios since v12
elm_requestButton.addEventListener('click', event => {
    cursorParallax.requestPermissionOfDeviceOrientationEvent();
  });
```
## API

- `stop`: Stop temporarily
- `start`: Restart from stopped state
- `resetEvent`: Rebind all events
- `destroy`: Unbind all events
- `isNeedPermissionOfDeviceOrientationEvent`: Whether permission for `DeviceOrientationEvent` is required
- `requestPermissionOfDeviceOrientationEvent`: Request permission to use `deviceOrientationEvent`

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
npm run build
```

## License
The MIT License (MIT) Copyright (c) 2016-2019 yoshi3.


[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE
