///<reference path="../../../../typings/typings.d.ts" />

class SidebarCtrl {
  constructor(public $mdSidenav:angular.material.MDSidenavService, public $log:angular.ILogService) {
  }
  close() {
    this.$mdSidenav('left').close()
    .then(() => {
      this.$log.debug('close LEFT is done');
    });
  }
}
SidebarCtrl.$inject = ['$mdSidenav', '$log'];

function sidebar():angular.IDirective {
  return {
    templateUrl: 'client/components/layout/sidebar/sidebar.ng.html',
    controllerAs: 'sideNav',
    controller: SidebarCtrl
  };
}

angular.module('app')
  .directive('shmckSidebar', sidebar);