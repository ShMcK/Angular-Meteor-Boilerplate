///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ResetCtrl {
  email:string;
  error:string;

  constructor(public $meteor, public $state) {
    this.email = '';
    this.error = '';
  }

  register() {
    this.$meteor.forgotPassword(this.email)
      .then(() => {
        this.$state.go('main');
      }, (e) => {
        this.error = `Error sending forgot password email: ${e}`;
      })
  }
}
ResetCtrl.$inject = ['$meteor', '$state'];

function resetPw() {
  return {
    templateUrl: 'client/components/accounts/reset-password.ng.html',
    controllerAs: 'rpc',
    controller: ResetCtrl
  };
}

angular.module('app').directive('shmckResetPw', resetPw);