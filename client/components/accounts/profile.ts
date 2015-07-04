///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ProfileCtrl {
  constructor(public Accounts:any) {
    //this.users = $meteor.collection(Meteor.users, false).subscribe('users');
  }
}
ProfileCtrl.$inject = ['Accounts'];

function profile():angular.IDirective {
  return {
    templateUrl: 'client/components/accounts/profile.ng.html',
    controllerAs: 'accounts',
    controller: ProfileCtrl
  };
}
/**
 * Profile Component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
  .directive('shmckProfile', profile);
