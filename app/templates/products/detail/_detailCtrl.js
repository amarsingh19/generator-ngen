(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name detailCtrl
   * @description
   * # detailCtrl
   * Controller of the <%=moduleName%>
   */
  angular.module('<%=moduleName%>').controller('productDetailCtrl', function ($stateParams) {
    var vm = this;
    
    function initializeCtrl() {
      vm.key = $stateParams.id;
      vm.name = $stateParams.productName;
    }

    initializeCtrl();
  });
})();

