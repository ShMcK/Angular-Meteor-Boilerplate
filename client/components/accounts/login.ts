///<reference path="../../../typings/typings.d.ts" />
'use strict';

class LoginCtrl {
  constructor(public Accounts:any) {}
}
LoginCtrl.$inject = ['Accounts'];

function login():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/login.ng.html',
    controllerAs: 'accounts',
    controller: LoginCtrl
  };
}
/**
 * Login Component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckLogin', login);
