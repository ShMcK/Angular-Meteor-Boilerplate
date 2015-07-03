///<reference path="../../../typings/typings.d.ts" />
'use strict';

class Toggler {
  toggleLeft:any;
  constructor(public $mdUtil,
              public $mdSidenav:angular.material.MDSidenavService,
              public $log:angular.ILogService) {

    this.toggleLeft = buildToggler('left');

    /**
     * build side-menu popout toggler
     * @returns {function(): undefined|LoDashObjectWrapper<Function>}
     */
    function buildToggler(navID:string) {
      return $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle();
      }, 250); // side-menu delay
    }
  }
  close() {
    this.$mdSidenav('left').close();
      //.then(() => {
      //  this.$log.debug('close LEFT is done');
      //});
  }
}
Toggler.$inject = ['$mdUtil', '$mdSidenav', '$log'];

/**
 * Page
 * handles toggles for navbar & sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .service('Toggler', Toggler);