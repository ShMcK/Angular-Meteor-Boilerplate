///<reference path="../../../../typings/typings.d.ts" />
var SidebarCtrl = (function () {
    function SidebarCtrl(Toggler, MenuItems) {
        this.Toggler = Toggler;
        this.MenuItems = MenuItems;
    }
    return SidebarCtrl;
})();
SidebarCtrl.$inject = ['Toggler', 'MenuItems'];
function sidebar() {
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
//# sourceMappingURL=sidebar.js.map