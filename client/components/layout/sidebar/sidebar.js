///<reference path="../../../../typings/typings.d.ts" />
var SidebarCtrl = (function () {
    function SidebarCtrl($mdSidenav, $log) {
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
    }
    SidebarCtrl.prototype.close = function () {
        var _this = this;
        this.$mdSidenav('left').close()
            .then(function () {
            _this.$log.debug('close LEFT is done');
        });
    };
    return SidebarCtrl;
})();
SidebarCtrl.$inject = ['$mdSidenav', '$log'];
function sidebar() {
    return {
        templateUrl: 'client/components/layout/sidebar/sidebar.ng.html',
        controllerAs: 'sideNav',
        controller: SidebarCtrl
    };
}
angular.module('app')
    .directive('shmckSidebar', sidebar);
//# sourceMappingURL=sidebar.js.map