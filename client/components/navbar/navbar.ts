///<reference path="../../../typings/typings.d.ts" />

angular.module('app')
  .directive('shmckNavbar', shmckNavbar);

class NavbarCtrl {
  //toggleLeft:any;

  constructor(public $mdUtil, public $log, public $mdSidenav) {
  }

  toggleLeft() {
    this.buildToggler('left')
  }

  buildToggler(navID) {
    // debounce sidenav
    return this.$mdUtil.debounce(function () {
      this.$mdSidenav(navID)
        .toggle()
        .then(() => {
          this.$log.debug("toggle " + navID + " is done");
        });
    }, 300);
  }
}
NavbarCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];

function shmckNavbar() {
  return {
    templateUrl: 'client/components/navbar/navbar.ng.html',
    controllerAs: 'navbar',
    controller: NavbarCtrl
  };
}