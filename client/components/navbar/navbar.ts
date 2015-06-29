///<reference path="../../../typings/typings.d.ts" />

angular.module('app')
  .directive('shmckNavbar', shmckNavbar);

class Navbar {
  componentName:String;

  constructor() {
    this.componentName = 'navbar';
  }
}

function shmckNavbar() {
  return {
    templateUrl: 'client/components/navbar/navbar.ng.html',
    controllerAs: 'navbar',
    controller: Navbar
  };
}