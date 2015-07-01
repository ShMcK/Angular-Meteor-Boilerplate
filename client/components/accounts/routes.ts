///<reference path="../../../typings/typings.d.ts" />
'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    /* Accounts */
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<shmck-login></shmck-login>'
      })
      .state('register', {
        url: '/register',
        template: '<shmck-register></shmck-register>'
      })
      .state('resetpw', {
        url: '/resetpw',
        template: '<shmck-reset-pw></shmck-reset-pw>'
      })
      .state('logout', {
        url: '/logout',
        resolve: {
          "logout": ['$meteor', '$state', function ($meteor, $state) {
            return $meteor.logout().then(function () {
              $state.go('main');
            }, function (e) {
              console.log(`logout error - ${e}`);
            });
          }]
        }
      });
  });