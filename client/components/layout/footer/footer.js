///<reference path="../../../../typings/typings.d.ts" />
var FooterCtrl = (function () {
    function FooterCtrl() {
    }
    return FooterCtrl;
})();
function footer() {
    return {
        templateUrl: 'client/components/layout/footer/footer.ng.html',
        controllerAs: 'footer',
        controller: FooterCtrl
    };
}
angular.module('app')
    .directive('shmckFooter', footer);
//# sourceMappingURL=footer.js.map