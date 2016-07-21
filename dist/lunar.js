/*! lunar.js v1.1.0 | (c) 2016 @toddmotto | https://github.com/toddmotto/lunar */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.lunar = factory();
  }
})(this, function () {

  'use strict';

  function get(el) {
    return el.getAttribute('class');
  }

  var lunar = {};

  lunar.hasClass = function (elem, name) {
    return new RegExp('(\\s|^)' + name + '(\\s|$)').test(get(elem));
  };

  lunar.addClass = function (elem, name) {
    !lunar.hasClass(elem, name) && elem.setAttribute('class', (get(elem) && get(elem) + ' ') + name);
  };

  lunar.removeClass = function (elem, name) {
    var remove = get(elem).replace(new RegExp('(\\s|^)' + name + '(\\s|$)', 'g'), '$2');
    lunar.hasClass(elem, name) && elem.setAttribute('class', remove);
  };

  lunar.toggleClass = function (elem, name) {
    lunar[lunar.hasClass(elem, name) ? 'removeClass' : 'addClass'](elem, name);
  };

  return lunar;

});
