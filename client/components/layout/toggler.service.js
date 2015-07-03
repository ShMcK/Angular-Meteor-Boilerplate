///<reference path="../../../typings/typings.d.ts" />
'use strict';
var Toggler = (function () {
    function Toggler($mdUtil, $mdSidenav, $log) {
        this.$mdUtil = $mdUtil;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
        this.toggleLeft = buildToggler('left');
        /**
         * build side-menu popout toggler
         * @returns {function(): undefined|LoDashObjectWrapper<Function>}
         */
        function buildToggler(navID) {
            return $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle();
            }, 250); // side-menu delay
        }
    }
    Toggler.prototype.close = function () {
        this.$mdSidenav('left').close();
        //.then(() => {
        //  this.$log.debug('close LEFT is done');
        //});
    };
    return Toggler;
})();
Toggler.$inject = ['$mdUtil', '$mdSidenav', '$log'];
/**
 * Page
 * handles toggles for navbar & sidebar
 * @type {angular.module}
 */
angular.module('shmck.layout')
    .service('Toggler', Toggler);
//# sourceMappingURL=toggler.service.js.map