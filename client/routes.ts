///<reference path="../typings/typings.d.ts" />

'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: `<shmck-main></shmck-main>`
      })
      .state('secondary', {
        url: '/secondary',
        template: '<secondary></secondary>'
      });
  })
  .config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }).run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('/');
      }
    });
  }]);

