(function () {
  'use strict';

  /**
   * @ngdoc filter
   * @name <%=moduleName%>:<%=filterName%>
   * @description
   * A filter for module <%=moduleName%>
   *
   * <b>filter:</b> <%=filterName%>
   */
  angular.module('<%=moduleName%>')
    .filter('<%=filterName%>', function () {
      return function(value){
        return value || 'Some Value';
      };
    });
})();

