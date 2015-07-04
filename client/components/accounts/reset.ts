///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ResetCtrl {
  page: string;
  constructor(public Accounts:any) {
    this.page = 'passwordReset';
  }
}
ResetCtrl.$inject = ['Accounts'];

function resetPw():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/accounts.ng.html',
    controllerAs: 'accounts',
    controller: ResetCtrl
  };
}

/**
 * Password Reset Component
 * @type {angular.module}
 */
angular.module('shmck.accounts').directive('shmckResetPw', resetPw);