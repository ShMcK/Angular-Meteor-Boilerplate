///<reference path="../../../typings/typings.d.ts" />
'use strict';
var LoginCtrl = (function () {
    function LoginCtrl($meteor, $state) {
        this.$meteor = $meteor;
        this.$state = $state;
        this.credentials = {
            email: '',
            password: ''
        };
        this.error = '';
    }
    LoginCtrl.prototype.login = function () {
        var _this = this;
        this.$meteor.loginWithPassword(this.credentials.email, this.credentials.password)
            .then(function () {
            _this.$state.go('main');
        }, function (e) {
            _this.error = "Login error: " + e;
        });
    };
    LoginCtrl.prototype.loginWithFacebook = function () {
        this.$meteor.loginWithFacebook({
            requestPermissions: ['email']
        }, function (e) {
            if (e) {
                console.log(e.reason);
            }
        });
    };
    LoginCtrl.prototype.loginWithGoogle = function () {
        this.$meteor.loginWithGoogle({
            requestPermissions: ['email']
        }, function (e) {
            if (e) {
                console.log(e.reason);
            }
        });
    };
    LoginCtrl.prototype.loginWithTwitter = function () {
        this.$meteor.loginWithTwitter(function (e) {
            if (e) {
                console.log(e.reason);
            }
        });
    };
    return LoginCtrl;
})();
LoginCtrl.$inject = ['$meteor', '$state'];
function login() {
    return {
        templateUrl: 'client/components/accounts/login.ng.html',
        controllerAs: 'accounts',
        controller: LoginCtrl
    };
}
/**
 * Login Component
 * @type {angular.module}
 */
angular.module('shmck.accounts')
    .directive('shmckLogin', login);
//# sourceMappingURL=login.js.map