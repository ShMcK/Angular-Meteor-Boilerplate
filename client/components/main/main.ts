///<reference path="../../../typings/typings.d.ts" />

class ShmckMainController {
  componentName:String;

  constructor() {
    this.componentName = 'main';
  }
}

function shmckMain() {
  return {
    templateUrl: 'client/components/main/main.ng.html',
    controllerAs: 'main',
    controller: ShmckMainController
  };
}

angular.module('app')
  .directive('shmckMain', shmckMain);