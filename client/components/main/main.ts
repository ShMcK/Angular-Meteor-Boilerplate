///<reference path="../../../typings/typings.d.ts" />

angular.module('app')
  .directive('shmckMain', shmckMain);

class Main {
  componentName:String;

  constructor() {
    this.componentName = 'main';
  }
}

function shmckMain() {
  return {
    templateUrl: 'client/components/main/main.ng.html',
    controllerAs: 'main',
    controller: Main
  };
}