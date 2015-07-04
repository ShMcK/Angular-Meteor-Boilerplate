///<reference path="../../../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

class SecondaryCtrl {
  componentName:String;
  constructor() {
    this.componentName = 'secondary';
  }
}
SecondaryCtrl.$inject = ['$meteor'];

function secondary():angular.IDirective {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: SecondaryCtrl,
  };
}

/**
 * Secondary
 * @type {angular.module}
 */
angular.module('shmck.secondary')
  .directive('secondary', secondary);