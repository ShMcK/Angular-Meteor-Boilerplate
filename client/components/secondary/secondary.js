///<reference path="../../../typings/typings.d.ts" />
'use strict';
var SecondaryCtrl = (function () {
    function SecondaryCtrl($meteor) {
        this.componentName = 'secondary';
        this.items = $meteor.collection(Items).subscribe('items');
    }
    return SecondaryCtrl;
})();
SecondaryCtrl.$inject = ['$meteor'];
function secondary() {
    return {
        templateUrl: 'client/components/secondary/secondary.ng.html',
        controllerAs: 'secondary',
        controller: SecondaryCtrl,
    };
}
/**
 * Secondary
 * @type {angular.module}
 */
angular.module('shmck.secondary')
    .directive('secondary', secondary);
//# sourceMappingURL=secondary.js.map