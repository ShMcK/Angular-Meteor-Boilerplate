///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface IPasswordResetCredential {
  email: string;
}

class ResetCtrl {
  credential: IPasswordResetCredential;
  error:string;

  constructor(public $meteor:angular.meteor.IMeteorService, public $state:angular.ui.IStateService) {
    this.credential = {
      email: ''
    };
    this.error = '';
  }

  register() {
    this.$meteor.forgotPassword(this.credential)
      .then(() => {
        this.$state.go('main');
      }, (e) => {
        this.error = `Error sending forgot password email: ${e}`;
      })
  }
}
ResetCtrl.$inject = ['$meteor', '$state'];

function resetPw():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/reset-password.ng.html',
    controllerAs: 'rpc',
    controller: ResetCtrl
  };
}

angular.module('app').directive('shmckResetPw', resetPw);