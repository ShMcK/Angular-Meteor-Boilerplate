///<reference path="../../../typings/typings.d.ts" />
var MainCtrl = (function () {
    function MainCtrl() {
        this.componentName = 'main';
    }
    return MainCtrl;
})();
function main() {
    return {
        templateUrl: 'client/components/main/main.ng.html',
        controllerAs: 'main',
        controller: MainCtrl
    };
}
angular.module('app')
    .directive('shmckMain', main);
//# sourceMappingURL=main.js.map