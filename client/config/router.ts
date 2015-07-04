///<reference path="../../typings/typings.d.ts" />
'use strict';

/**
 * Ui.Router Configuration
 * @type {angular.module}
 */
angular.module('app')
/**
 * Router Config
 */
  .config(function ($urlRouterProvider:angular.ui.IUrlRouterProvider, $locationProvider:angular.ILocationProvider):void {
    // removes /#/
    $locationProvider.html5Mode(true);
    // unregistered routes redirect to '/'
    $urlRouterProvider.otherwise('/');
  })
/**
 * Authorization required (user needs permission)
 * Redirects to main
 */
  .run(['$rootScope', '$state', function ($rootScope:angular.IRootScopeService, $state:angular.ui.IStateService):void {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('main');
      }
    });
  }]);

