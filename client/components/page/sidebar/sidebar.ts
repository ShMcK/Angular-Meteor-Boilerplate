///<reference path="../../../../typings/typings.d.ts" />

class SidebarCtrl {
  constructor(public $mdSidenav, public $log) {
  }
  close() {
    this.$mdSidenav('left').close()
    .then(() => {
      this.$log.debug('close LEFT is done');
    });
  }
}
SidebarCtrl.$inject = ['$mdSidenav', '$log'];

function sidebar() {
  return {
    templateUrl: 'client/components/page/sidebar/sidebar.ng.html',
    controllerAs: 'sideNav',
    controller: SidebarCtrl
  };
}

angular.module('app')
  .directive('shmckSidebar', sidebar);