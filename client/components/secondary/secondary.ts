///<reference path="../../../typings/typings.d.ts" />

class SecondaryController {
  componentName:String;

  constructor() {
    this.componentName = 'secondary';
  }
}

function secondary() {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: SecondaryController
  };
}

angular.module('app')
  .directive('secondary', secondary);