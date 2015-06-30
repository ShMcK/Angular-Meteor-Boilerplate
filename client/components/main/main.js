///<reference path="../../../typings/typings.d.ts" />
var ShmckMainController = (function () {
    function ShmckMainController() {
        this.componentName = 'main';
    }
    return ShmckMainController;
})();
function shmckMain() {
    return {
        templateUrl: 'client/components/main/main.ng.html',
        controllerAs: 'main',
        controller: ShmckMainController
    };
}
angular.module('app')
    .directive('shmckMain', shmckMain);
//# sourceMappingURL=main.js.map