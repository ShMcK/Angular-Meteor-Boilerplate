///<reference path="../../../../typings/typings.d.ts" />
'use strict';

class NavbarCtrl {
  constructor(public Toggler){}
}
NavbarCtrl.$inject = ['Toggler'];

function shmckNavbar():angular.IDirective {
  return {
    templateUrl: 'client/components/layout/navbar/navbar.ng.html',
    controllerAs: 'navbar',
    controller: NavbarCtrl
  };
}

/**
 * Navbar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .directive('shmckNavbar', shmckNavbar);