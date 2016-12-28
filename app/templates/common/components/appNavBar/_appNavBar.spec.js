(function () {
  'use strict';

  describe('Component: appNavBar', function () {
    var ctrl, scope;

    // load the controller's module
    beforeEach(module('<%=moduleName%>'));

    beforeEach(inject(function ($compile, $controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('appNavBarCtrl', {
        $scope: scope
      });
    }));

    it('to be defined', function () {
      expect(ctrl).toBeDefined();
    });
  });
})();
