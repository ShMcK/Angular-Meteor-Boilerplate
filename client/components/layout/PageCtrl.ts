///<reference path="../../../typings/typings.d.ts" />
'use strict';

class PageCtrl {
  toggleLeft:any;

  constructor(public $mdUtil,
              public $mdSidenav:angular.material.MDSidenavService,
              public $log:angular.ILogService) {
    this.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      return $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            //$log.debug("toggle " + navID + " is done");
          });
      }, 300);
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