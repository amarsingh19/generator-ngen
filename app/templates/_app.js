(function () {
  'use strict';
  angular.module('<%=moduleName%>', ['ui.router'])
    .config(function ($urlRouterProvider) {
      console.log('App Configuration.');
        $urlRouterProvider.otherwise('/home');
    })
    .run(function () {
      console.log('App running...');
    });

  function initApp() {
   console.log('App initialized...');
  }

  initApp();
})();
