///<reference path="../../../typings/typings.d.ts" />
'use strict';
var PageCtrl = (function () {
    function PageCtrl($mdUtil, $mdSidenav, $log) {
        this.$mdUtil = $mdUtil;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
        this.toggleLeft = buildToggler('left');
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
            }, 300);
            return debounceFn;
        }
    }
    return PageCtrl;
})();
PageCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];
angular.module('app').controller('PageCtrl', PageCtrl);
//# sourceMappingURL=PageCtrl.js.map