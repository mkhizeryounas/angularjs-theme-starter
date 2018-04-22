'use strict';

describe('myApp.blank module', function() {

  beforeEach(module('myApp.blank'));

  describe('blank controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var blankCtrl = $controller('blankCtrl');
      expect(blankCtrl).toBeDefined();
    }));

  });
});