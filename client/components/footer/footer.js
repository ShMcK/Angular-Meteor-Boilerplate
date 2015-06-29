///<reference path="../../../typings/typings.d.ts" />
angular.module('app')
    .directive('shmckFooter', shmckFooter);
var Footer = (function () {
    function Footer() {
        this.componentName = 'footer';
    }
    return Footer;
})();
function shmckFooter() {
    return {
        templateUrl: 'client/components/footer/footer.ng.html',
        controllerAs: 'footer',
        controller: Footer
    };
}
//# sourceMappingURL=footer.js.map