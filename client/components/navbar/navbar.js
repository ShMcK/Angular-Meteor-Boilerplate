///<reference path="../../../typings/typings.d.ts" />
angular.module('app')
    .directive('shmckNavbar', shmckNavbar);
var NavbarCtrl = (function () {
    //toggleLeft:any;
    function NavbarCtrl($mdUtil, $log, $mdSidenav) {
        this.$mdUtil = $mdUtil;
        this.$log = $log;
        this.$mdSidenav = $mdSidenav;
    }
    NavbarCtrl.prototype.toggleLeft = function () {
        this.buildToggler('left');
    };
    NavbarCtrl.prototype.buildToggler = function (navID) {
        // debounce sidenav
        return this.$mdUtil.debounce(function () {
            var _this = this;
            this.$mdSidenav(navID)
                .toggle()
                .then(function () {
                _this.$log.debug("toggle " + navID + " is done");
            });
        }, 300);
    };
    return NavbarCtrl;
})();
NavbarCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];
function shmckNavbar() {
    return {
        templateUrl: 'client/components/navbar/navbar.ng.html',
        controllerAs: 'navbar',
        controller: NavbarCtrl
    };
}
//# sourceMappingURL=navbar.js.map