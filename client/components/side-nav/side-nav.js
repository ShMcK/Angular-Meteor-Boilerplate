///<reference path="../../../typings/typings.d.ts" />
var SideNavCtrl = (function () {
    function SideNavCtrl($mdUtil, $mdSidenav, $log) {
        this.$mdUtil = $mdUtil;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
    }
    SideNavCtrl.prototype.close = function () {
        var _this = this;
        this.$mdSidenav('left').close()
            .then(function () {
            _this.$log.debug('close LEFT is done');
        });
    };
    return SideNavCtrl;
})();
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
//# sourceMappingURL=side-nav.js.map