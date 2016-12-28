(function () {
  'use strict';
  var app = angular.module('<%=moduleName%>').config(function ($stateProvider) {
    $stateProvider.state('<%=routeName%>', {
      url: '/<%=routeName%>',
      templateUrl: '<%=routeName%>/<%=routeName%>.html',
      controller: '<%=routeName%>Ctrl',
      controllerAs: 'ctrl'
    });
  });
})();
