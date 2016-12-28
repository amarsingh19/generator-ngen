(function() {
  'use strict';

  describe('Controller: detailCtrl', function () {
    var detailCtrl, scope;

    beforeEach(module('<%=moduleName%>'));


    beforeEach(inject(function ($rootScope, $controller) {
      detailCtrl = $controller('productDetailCtrl', {$scope:$rootScope.$new()});
    }));

    it('to be defined', function () {
      expect(detailCtrl).toBeDefined();
    });
  });
})();

