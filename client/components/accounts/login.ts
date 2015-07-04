///<reference path="../../../typings/typings.d.ts" />
'use strict';

class LoginCtrl {
  page: string;
  constructor(public Accounts:any) {
    this.page = 'login';
  }
}
LoginCtrl.$inject = ['Accounts'];

function login():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/accounts.ng.html',
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
