(function() {
  'use strict';

  describe('Controller: productsCtrl', function () {
    var productsCtrl, scope;

    beforeEach(module('<%=moduleName%>'));


    beforeEach(inject(function ($rootScope, $controller) {
      productsCtrl = $controller('productsCtrl', {$scope:$rootScope.$new()});
    }));

    it('to be defined', function () {
      expect(productsCtrl).toBeDefined();
    });
  });
})();

