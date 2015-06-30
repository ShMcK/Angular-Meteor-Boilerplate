///<reference path="../../../typings/typings.d.ts" />
var SecondaryCtrl = (function () {
    function SecondaryCtrl() {
        this.componentName = 'secondary';
    }
    return SecondaryCtrl;
})();
function secondary() {
    return {
        templateUrl: 'client/components/secondary/secondary.ng.html',
        controllerAs: 'secondary',
        controller: SecondaryCtrl
    };
}
angular.module('app')
    .directive('secondary', secondary);
//# sourceMappingURL=secondary.js.map