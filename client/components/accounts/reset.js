///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ResetCtrl = (function () {
    function ResetCtrl(Accounts) {
        this.Accounts = Accounts;
        this.page = 'passwordReset';
    }
    return ResetCtrl;
})();
ResetCtrl.$inject = ['Accounts'];
function resetPw() {
    return {
        templateUrl: 'client/components/accounts/accounts.ng.html',
        controllerAs: 'accounts',
        controller: ResetCtrl
    };
}
/**
 * Password Reset Component
 * @type {angular.module}
 */
angular.module('shmck.accounts').directive('shmckResetPw', resetPw);
//# sourceMappingURL=reset.js.map