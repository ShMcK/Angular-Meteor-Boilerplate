///<reference path="../../../typings/typings.d.ts" />
'use strict';

class LoginCtrl {
  credentials:ICredentials;
  error:string;

  constructor(public $meteor:angular.meteor.IMeteorService, public $state:angular.ui.IStateService) {
    this.credentials = {
      email: '',
      password: ''
    };
    this.error = '';
  }

  login() {
    this.$meteor.loginWithPassword(this.credentials.email, this.credentials.password)
      .then(() => {
        this.$state.go('main');
      }, (e) => {
        this.error = `Login error: ${e}`;
      })
  }
}
LoginCtrl.$inject = ['$meteor', '$state'];

function login ():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/login.ng.html',
    controllerAs: 'lc',
    controller: LoginCtrl
  };
}
/**
 * Login Component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckLogin', login);
