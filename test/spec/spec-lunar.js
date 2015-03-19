/**
 * lunar.js
 */
describe('lunar', function () {

  var $$ = function (selector) {
    return document.querySelector(selector);
  };

  var injectSVG = function () {
    var template = '<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">' +
                     '<circle cx="100" cy="50" r="40" fill="red"/>' +
                   '</svg>';
    document.body.innerHTML = template;
  };

  /**
   * addClass
   */
  describe('addClass()', function () {

    var svg;

    beforeEach(function () {
      injectSVG();
      svg = $$('circle');
      lunar.addClass(svg, 'test');
    });

    it('should add a class', function () {
      expect(svg.getAttribute('class')).toContain('test');
    });

  });

  /**
   * hasClass
   */
  describe('hasClass()', function () {

    var svg;

    beforeEach(function () {
      injectSVG();
      svg = $$('circle');
      lunar.addClass(svg, 'test');
    });

    it('should boolean evaluate class existence', function () {
      expect(lunar.hasClass(svg, 'test')).toBe(true);
      expect(lunar.hasClass(svg, 'testFalse')).toBe(false);
    });

  });

  /**
   * removeClass
   */
  describe('removeClass()', function () {

    var svg;

    beforeEach(function () {
      injectSVG();
      svg = $$('circle');
      lunar.addClass(svg, 'test');
      lunar.removeClass(svg, 'test');
    });

    it('should remove the class', function () {
      expect(lunar.hasClass(svg, 'test')).toBe(false);
    });

  });

  /**
   * toggleClass
   */
  describe('toggleClass()', function () {

    var svg;

    beforeEach(function () {
      injectSVG();
      svg = $$('circle');
      lunar.toggleClass(svg, 'mySVG');
	  lunar.toggleClass(svg, 'mySVG');
      lunar.toggleClass(svg, 'test');
    });

    it('should toggle both classes, adding one and removing the other', function () {
      expect(lunar.hasClass(svg, 'test')).toBe(true);
      expect(lunar.hasClass(svg, 'mySVG')).toBe(false);
    });

  });

});
