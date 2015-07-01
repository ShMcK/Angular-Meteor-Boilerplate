///<reference path="../../../typings/typings.d.ts" />
'use strict';

class RegisterCtrl {
  credentials:ICredentials;
  error:string;

  constructor(public $meteor, public $state) {
    this.credentials = {
      email: '',
      password: ''
    };
    this.error = '';
  }

  register() {
    this.$meteor.createUser(this.credentials)
      .then(()=> {
        this.$state.go('main');
      }, (e) => {
        this.error = `Registration error: ${e}`;
      });
  }
}
RegisterCtrl.$inject = ['$meteor', '$state'];

function register () {
  return {
    templateUrl: 'client/components/accounts/register.ng.html',
    controllerAs: 'rc',
    controller: RegisterCtrl
  };
}

angular.module('app')
  .directive('shmckRegister', register);