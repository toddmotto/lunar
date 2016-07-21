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

  function has(elem, name) {
    return new RegExp('(\\s|^)' + name + '(\\s|$)').test(get(elem));
  }

  function add(elem, name) {
    !has(elem, name) && elem.setAttribute('class', (get(elem) && get(elem) + ' ') + name);
  }

  function remove(elem, name) {
    var news = get(elem).replace(new RegExp('(\\s|^)' + name + '(\\s|$)', 'g'), '$2');
    has(elem, name) && elem.setAttribute('class', news);
  }

  function toggle(elem, name) {
    (has(elem, name) ? remove : add)(elem, name);
  }

  return {
    hasClass: has,
    addClass: add,
    removeClass: remove,
    toggleClass: toggle
  };
});
