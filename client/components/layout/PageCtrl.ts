///<reference path="../../../typings/typings.d.ts" />
'use strict';

class PageCtrl {
  toggleLeft:any;

  constructor(public $mdUtil,
              public $mdSidenav:angular.material.MDSidenavService,
              public $log:angular.ILogService) {

    this.toggleLeft = buildToggler('left');

    function buildToggler(navID:string) {
      return $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle();
      }, 250); // side-menu delay
    }
  }
}
PageCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];

/**
 * Page
 * handles toggles for navbar & sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .controller('PageCtrl', PageCtrl);