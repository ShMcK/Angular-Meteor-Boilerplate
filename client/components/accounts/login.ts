///<reference path="../../../typings/typings.d.ts" />
'use strict';

class LoginCtrl {
  credentials:ICredentials;
  error:string;

  constructor(public $meteor, public $state) {
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

function login () {
  return {
    templateUrl: 'client/components/accounts/login.ng.html',
    controllerAs: 'lc',
    controller: LoginCtrl
  };
}

angular.module('app')
  .directive('shmckLogin', login);
