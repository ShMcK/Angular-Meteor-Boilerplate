///<reference path="../../../../typings/typings.d.ts" />

class SidebarCtrl {
  constructor(public Toggler, public MenuItems) {}
  // todo: Toggler.close() button
}
SidebarCtrl.$inject = ['Toggler', 'MenuItems'];

function sidebar():angular.IDirective {
  return {
    templateUrl: 'client/components/layout/sidebar/sidebar.ng.html',
    controllerAs: 'sideNav',
    controller: SidebarCtrl
  };
}

/**
 * Sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .directive('shmckSidebar', sidebar);