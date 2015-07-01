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

/**
 * Navbar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .directive('shmckNavbar', shmckNavbar);