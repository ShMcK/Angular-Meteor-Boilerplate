///<reference path="../../../typings/typings.d.ts" />
angular.module('app')
    .directive('shmckMain', shmckMain);
var Main = (function () {
    function Main() {
        this.componentName = 'main';
    }
    return Main;
})();
function shmckMain() {
    return {
        templateUrl: 'client/components/main/main.ng.html',
        controllerAs: 'main',
        controller: Main
    };
}
//# sourceMappingURL=main.js.map