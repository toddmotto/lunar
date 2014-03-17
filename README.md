# Lunar.js [![Build Status](https://travis-ci.org/toddmotto/lunar.png)](https://travis-ci.org/toddmotto/lunar)

Lunar is a 0.6KB standalone SVG DOM class manipulation module that provides a wrapper for `addClass`, `hasClass`, `removeClass` and `toggleClass` methods. Lunar will work in all browsers that can natively run inline SVG (IE9+).

```html
<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <circle cx="100" cy="50" r="40" fill="red" class="myClass" />
</svg>

<script>
// query SVG DOM
var svg = document.querySelector('.myClass');

// hasClass() returns boolean on class existence
Lunar.hasClass(svg, 'className');

// addClass() adds class
Lunar.addClass(svg, 'className');

// removeClass() removes class
Lunar.removeClass(svg, 'className');

// toggleClass() toggles class
Lunar.toggleClass(svg, 'className');
</script>
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/lunar.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
  
```html
<body>
  <!-- html above -->
  <script src="dist/lunar.js"></script>
  <script>
  var svg = document.querySelector('.myClass');
  Lunar.addClass(svg, 'mySVGClass');
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

- 1.0.0
  - Initial release
