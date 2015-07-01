///<reference path="../../../../typings/typings.d.ts" />
'use strict';

class NavbarCtrl {}

function shmckNavbar():angular.IDirective {
  return {
    templateUrl: 'client/components/layout/navbar/navbar.ng.html',
    controllerAs: 'navbar',
    controller: NavbarCtrl
  };
}

angular.module('app')
  .directive('shmckNavbar', shmckNavbar);