///<reference path="../../../typings/typings.d.ts" />

class SideNavCtrl {
  constructor(public $mdUtil, public $mdSidenav, public $log) {
  }
  close() {
    this.$mdSidenav('left').close()
    .then(() => {
      this.$log.debug('close LEFT is done');
    });
  }
}
SideNavCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];

function sideNav() {
  return {
    templateUrl: 'client/components/side-nav/side-nav.ng.html',
    controllerAs: 'sideNav',
    controller: SideNavCtrl
  };
}

angular.module('app')
  .directive('sideNav', sideNav);