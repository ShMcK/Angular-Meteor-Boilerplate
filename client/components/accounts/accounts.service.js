///<reference path="../../../typings/typings.d.ts" />
'use strict';
/**
 * AccountsService
 * login, login with OAuth, logout
 */
var AccountsService = (function () {
    function AccountsService($meteor, $state) {
        this.$meteor = $meteor;
        this.$state = $state;
        this.credentials = {
            email: '',
            password: ''
        };
        this.error = '';
    }
    AccountsService.prototype.attempt = function (e) {
        if (e) {
            // error
            this.error = "Login error: " + e;
        }
        else {
            // success
            this.$state.go('main');
        }
    };
    /**
     * Login
     * @returns {Promise|Promise<T>}
     */
    AccountsService.prototype.login = function () {
        var _this = this;
        this.$meteor.loginWithPassword(this.credentials.email, this.credentials.password)
            .then(function (e) {
            _this.attempt(e);
        });
    };
    /**
     * Logout
     */
    AccountsService.prototype.logout = function () {
        var _this = this;
        this.$meteor.logout()
            .then(function (e) {
            _this.attempt(e);
        });
    };
    /**
     * Login with Facebook
     * @returns {Promise|Promise<T>}
     */
    AccountsService.prototype.loginWithFacebook = function () {
        var _this = this;
        this.$meteor.loginWithFacebook({
            requestPermissions: ['email']
        }, function (e) {
            _this.attempt(e);
        });
    };
    /**
     * Login with Google
     * @returns {Promise|Promise<T>}
     */
    AccountsService.prototype.loginWithGoogle = function () {
        var _this = this;
        this.$meteor.loginWithGoogle({
            requestPermissions: ['email']
        }, function (e) {
            _this.attempt(e);
        });
    };
    /**
     * Login with Twitter
     * @returns {Promise|Promise<T>}
     */
    AccountsService.prototype.loginWithTwitter = function () {
        var _this = this;
        this.$meteor.loginWithTwitter(
        //  {
        //  requestPermissions: ['email']
        //},
        function (e) {
            _this.attempt(e);
        });
    };
    AccountsService.prototype.verifyEmail = function (token) {
        this.$meteor.verifyEmail(token);
    };
    return AccountsService;
})();
AccountsService.$inject = ['$meteor', '$state'];
/**
 * Accounts Service
 * handles login, oAuth, logout
 * @type {angular.module}
 */
angular.module('shmck.accounts').service('Accounts', AccountsService);
//# sourceMappingURL=accounts.service.js.map