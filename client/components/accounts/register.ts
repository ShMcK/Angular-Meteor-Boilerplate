///<reference path="../../../typings/typings.d.ts" />
'use strict';


class RegisterCtrl {
  page: string;
  constructor(public Accounts:any) {
    this.page = 'register';
  }
}
RegisterCtrl.$inject = ['Accounts'];

function register ():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/accounts.ng.html',
    controllerAs: 'accounts',
    controller: RegisterCtrl
  };
}

/**
 * Register component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckRegister', register);