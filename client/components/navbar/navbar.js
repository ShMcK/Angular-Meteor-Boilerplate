///<reference path="../../../typings/typings.d.ts" />
angular.module('app')
    .directive('shmckNavbar', shmckNavbar);
var Navbar = (function () {
    function Navbar() {
    }
    return Navbar;
})();
function shmckNavbar() {
    return {
        templateUrl: 'client/components/navbar/navbar.ng.html',
        controllerAs: 'navbar',
        controller: Navbar
    };
}
//# sourceMappingURL=navbar.js.map