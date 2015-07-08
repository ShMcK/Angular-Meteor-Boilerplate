///<reference path="../typings/typings.d.ts" />
'use strict';

/**
 * Routes
 * @type {angular.module}
 */
angular.module('app')
  .config(function ($stateProvider:angular.ui.IStateProvider) {

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


  /* require user for route */
//"currentUser": ["$meteor", function($meteor:angular.meteor.IMeteorService){
  //  return $meteor.requireUser();
  //}]
