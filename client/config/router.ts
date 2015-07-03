///<reference path="../../typings/typings.d.ts" />
'use strict';

/**
 * Ui.Router Configuration
 * @type {angular.module}
 */
angular.module('app')
  .config(function ($urlRouterProvider:angular.ui.IUrlRouterProvider, $locationProvider:angular.ILocationProvider):void {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }).run(['$rootScope', '$state', function ($rootScope:angular.IRootScopeService, $state:angular.ui.IStateService):void {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('/');
      }
    });
  }]);

