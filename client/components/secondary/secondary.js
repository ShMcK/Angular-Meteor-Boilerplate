///<reference path="../../../typings/typings.d.ts" />
var SecondaryController = (function () {
    function SecondaryController() {
        this.componentName = 'secondary';
    }
    return SecondaryController;
})();
function secondary() {
    return {
        templateUrl: 'client/components/secondary/secondary.ng.html',
        controllerAs: 'secondary',
        controller: SecondaryController
    };
}
angular.module('app')
    .directive('secondary', secondary);
//# sourceMappingURL=secondary.js.map