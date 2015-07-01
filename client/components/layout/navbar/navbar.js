///<reference path="../../../../typings/typings.d.ts" />
'use strict';
var NavbarCtrl = (function () {
    function NavbarCtrl() {
    }
    return NavbarCtrl;
})();
function shmckNavbar() {
    return {
        templateUrl: 'client/components/layout/navbar/navbar.ng.html',
        controllerAs: 'navbar',
        controller: NavbarCtrl
    };
}
/**
 * Navbar
 * @type {angular.module}
 */
angular.module('shmck.layout')
    .directive('shmckNavbar', shmckNavbar);
//# sourceMappingURL=navbar.js.map