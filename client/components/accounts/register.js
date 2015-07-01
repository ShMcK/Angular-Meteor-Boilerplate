///<reference path="../../../typings/typings.d.ts" />
'use strict';
var RegisterCtrl = (function () {
    function RegisterCtrl($meteor, $state) {
        this.$meteor = $meteor;
        this.$state = $state;
        this.credentials = {
            email: '',
            password: ''
        };
        this.error = '';
    }
    RegisterCtrl.prototype.register = function () {
        var _this = this;
        this.$meteor.createUser(this.credentials)
            .then(function () {
            _this.$state.go('main');
        }, function (e) {
            _this.error = "Registration error: " + e;
        });
    };
    return RegisterCtrl;
})();
RegisterCtrl.$inject = ['$meteor', '$state'];
function register() {
    return {
        templateUrl: 'client/components/accounts/register.ng.html',
        controllerAs: 'rc',
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