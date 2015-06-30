///<reference path="../../../typings/typings.d.ts" />

class SecondaryCtrl {
  componentName:String;

  constructor() {
    this.componentName = 'secondary';
  }
}

function secondary() {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: SecondaryCtrl
  };
}

angular.module('app')
  .directive('secondary', secondary);