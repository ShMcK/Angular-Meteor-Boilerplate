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
angular.module('app')
    .directive('shmckNavbar', shmckNavbar);
//# sourceMappingURL=navbar.js.map