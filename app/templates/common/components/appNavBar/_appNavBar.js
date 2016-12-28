(function () {
  'use strict';
  /**
   * @ngdoc directive
   * @name appNavBar
   * @description
   * # appNavBar
   * Directive of the <%=moduleName%>
   *
   * @example
   <example module="<%=moduleName%>">
   <file name="index.html">
   <app-nav-bar></app-nav-bar>
   </div>
   </file>
   </example>
   */
  angular.module('<%=moduleName%>')
      .directive('appNavBar', function () {
        return {
          templateUrl: 'common/components/appNavBar/appNavBar.html',
          replace: true,
          restrict: 'E',
          controller: 'appNavBarCtrl',
          controllerAs: 'ctrl',
          bindToController: true
        };
      })
      .controller('appNavBarCtrl', function ($state, $rootScope) {
        var vm = this;
        var _currentActiveState = 'home';

        function activate() {
          console.log($state);
        }

        function stateActive(stateName) {
          return stateName === _currentActiveState;
        }

        vm.isStateActive = stateActive;


        $rootScope.$on('$stateChangeStart', function (event, a) {
          _currentActiveState = a.name;
        });
        activate();
      });
})();

