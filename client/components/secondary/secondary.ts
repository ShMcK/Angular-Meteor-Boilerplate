///<reference path="../../../typings/typings.d.ts" />
'use strict';

class SecondaryCtrl {
  componentName:String;

  constructor() {
    this.componentName = 'secondary';
  }
}

function secondary():angular.IDirective {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: SecondaryCtrl
  };
}

angular.module('app')
  .directive('secondary', secondary);