///<reference path="../../../typings/typings.d.ts" />

class MainCtrl {
  componentName:String;

  constructor() {
    this.componentName = 'main';
  }
}

function main() {
  return {
    templateUrl: 'client/components/main/main.ng.html',
    controllerAs: 'main',
    controller: MainCtrl
  };
}

angular.module('app')
  .directive('shmckMain', main);