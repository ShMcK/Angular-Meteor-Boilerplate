///<reference path="../../../typings/typings.d.ts" />
'use strict';
declare var Items:any;

class SecondaryCtrl {
  componentName:String;
  constructor($meteor:angular.meteor.IMeteorService) {
    this.componentName = 'secondary';
  }
}
//SecondaryCtrl.$inject = ['$meteor'];

function secondary():angular.IDirective {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: ['$meteor', SecondaryCtrl],
  };
}

/**
 * Secondary
 * @type {angular.module}
 */
angular.module('shmck.secondary')
  .directive('secondary',  secondary);