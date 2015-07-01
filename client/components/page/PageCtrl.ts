///<reference path="../../../typings/typings.d.ts" />
'use strict';

class PageCtrl{
  toggleLeft: any;
  constructor(public $mdUtil, public $mdSidenav, public $log) {
    this.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      },300);
      return debounceFn;
    }
  }
}
PageCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];

angular.module('app').controller('PageCtrl', PageCtrl);