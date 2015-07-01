///<reference path="../../../typings/typings.d.ts" />
'use strict';

class RegisterCtrl {
  credentials:ICredentials;
  error:string;

  constructor(public $meteor:angular.meteor.IMeteorService, public $state:angular.ui.IStateService) {
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

function register ():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/register.ng.html',
    controllerAs: 'rc',
    controller: RegisterCtrl
  };
}

/**
 * Register component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckRegister', register);