(function() {
  'use strict';

  describe('Controller: <%=routeName%>Ctrl', function () {
    var <%=routeName%>Ctrl, scope;

    beforeEach(module('<%=moduleName%>'));


    beforeEach(inject(function ($rootScope, $controller) {
      <%=routeName%>Ctrl = $controller('<%=routeName%>Ctrl', {$scope:$rootScope.$new()});
    }));

    it('to be defined', function () {
      expect(<%=routeName%>Ctrl).toBeDefined();
    });
  });
})();

