///<reference path="../../../typings/typings.d.ts" />
'use strict';
var PageCtrl = (function () {
    function PageCtrl($mdUtil, $mdSidenav, $log) {
        this.$mdUtil = $mdUtil;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
        this.toggleLeft = buildToggler('left');
        function buildToggler(navID) {
            return $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle();
            }, 250); // side-menu delay
        }
    }
    return PageCtrl;
})();
PageCtrl.$inject = ['$mdUtil', '$mdSidenav', '$log'];
/**
 * Page
 * handles toggles for navbar & sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
    .controller('PageCtrl', PageCtrl);
//# sourceMappingURL=PageCtrl.js.map