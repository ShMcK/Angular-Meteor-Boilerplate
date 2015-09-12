///<reference path="../../../../typings/typings.d.ts" />

class SidebarCtrl {
  constructor(public Toggler, public MenuItems) {}
  // todo: Toggler.close() button
}
//SidebarCtrl.$inject = ['Toggler', 'MenuItems'];

function sidebar(Toggler:any, MenuItems:any ):angular.IDirective {
  return {
    templateUrl: 'client/components/layout/sidebar/sidebar.ng.html',
    controllerAs: 'sideNav',
    controller: function() { return new SidebarCtrl(Toggler,MenuItems); }
  };
}

/**
 * Sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .directive('shmckSidebar',  ['Toggler', 'MenuItems', sidebar]);