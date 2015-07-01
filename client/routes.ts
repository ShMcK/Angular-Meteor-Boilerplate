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
  });