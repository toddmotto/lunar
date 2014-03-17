(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Lunar = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  exports.hasClass = function (elem, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.getAttribute('class'));
  };

  exports.addClass = function (elem, className) {
    if (!exports.hasClass(elem, className)) {
      elem.setAttribute('class', elem.getAttribute('class') + ' ' + className);
    }
  };

  exports.removeClass = function (elem, className) {
    var remove = elem.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
    if (exports.hasClass(elem, className)) {
      elem.setAttribute('class', remove);
    }
  };

  exports.toggleClass = function (elem, className) {
    if (exports.hasClass(elem, className)) {
      exports.removeClass(elem, className);
    } else {
      exports.addClass(elem, className);
    }
  };

  return exports;

});
