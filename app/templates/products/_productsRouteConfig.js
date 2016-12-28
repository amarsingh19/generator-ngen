(function () {
  'use strict';
  var app = angular.module('<%=moduleName%>').config(function ($stateProvider) {
    $stateProvider.state('products', {
      url: '/products',
      templateUrl: 'products/products.html',
      controller: 'productsCtrl',
      controllerAs: 'ctrl'
    }).state('products.detail', {
      url: '/detail/:id/:productName',
      templateUrl: 'products/detail/detail.html',
      controller: 'productDetailCtrl',
      controllerAs: 'ctrl'
    });
  });
})();
