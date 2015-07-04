///<reference path="../../../typings/typings.d.ts" />
'use strict';
var RegisterCtrl = (function () {
    function RegisterCtrl(Accounts) {
        this.Accounts = Accounts;
        this.page = 'register';
    }
    return RegisterCtrl;
})();
RegisterCtrl.$inject = ['Accounts'];
function register() {
    return {
        templateUrl: 'client/components/accounts/accounts.ng.html',
        controllerAs: 'accounts',
        controller: RegisterCtrl
    };
}
/**
 * Register component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
    .directive('shmckRegister', register);
//# sourceMappingURL=register.js.map