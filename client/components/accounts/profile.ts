///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ProfileCtrl {
  user:Meteor.User;
  constructor(public Accounts:any,
              $meteor:angular.meteor.IMeteorService) {
  }
}
//ProfileCtrl.$inject = ['Accounts'];

function profile(Accounts:any, $meteor:angular.meteor.IMeteorService):angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/profile.ng.html',
    controllerAs: 'accounts',
    controller: ['Accounts','$meteor', ProfileCtrl]
  };
}
/**
 * Profile Component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckProfile', profile);
