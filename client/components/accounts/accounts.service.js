///<reference path="../../../typings/typings.d.ts" />
'use strict';
/**
 * AccountsService
 * login, login with OAuth, logout
 */
var AccountsService = (function () {
    function AccountsService($meteor, $state, ACCOUNT_SETTINGS) {
        this.$meteor = $meteor;
        this.$state = $state;
        this.ACCOUNT_SETTINGS = ACCOUNT_SETTINGS;
        this.credentials = {
            username: '',
            email: '',
            password: ''
        };
        this.error = '';
    }
    /**
     * Success/Failure Handler
     * @param e
     */
    AccountsService.prototype.handler = function (e) {
        if (e) {
            // error
            this.error = "Error: " + e;
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
            _this.handler(e);
        });
    };
    /**
     * Register new user
     */
    AccountsService.prototype.register = function () {
        var _this = this;
        //var validEmail = this.verifyEmail(this.credentials.email); // todo
        this.$meteor.createUser(this.credentials)
            .then(function (e) {
            _this.handler(e);
        });
    };
    /**
     * Logout
     */
    AccountsService.prototype.logout = function () {
        var _this = this;
        this.$meteor.logout()
            .then(function (e) {
            _this.handler(e);
        });
    };
    /**
     * Login with OAuth
     * Facebook, Twitter, Google, Github, Weibo, MeteorDev, Meetup
     * @returns {Promise|Promise<T>}
     */
    AccountsService.prototype.loginWithFacebook = function () {
        var _this = this;
        this.$meteor.loginWithFacebook({
            requestPermissions: ['email']
        }, function (e) {
            _this.handler(e);
        });
    };
    AccountsService.prototype.loginWithGoogle = function () {
        var _this = this;
        this.$meteor.loginWithGoogle({
            requestPermissions: ['email']
        }, function (e) {
            _this.handler(e);
        });
    };
    AccountsService.prototype.loginWithTwitter = function () {
        var _this = this;
        this.$meteor.loginWithTwitter({}, 
        // uncomment if granted email access from Twitter
        //  {
        //  requestPermissions: ['email']
        //},
        function (e) {
            _this.handler(e);
        });
    };
    /**
     * Password
     */
    AccountsService.prototype.forgotPassword = function (credential) {
        var _this = this;
        this.$meteor.forgotPassword(credential)
            .then(function (e) {
            _this.handler(e);
        });
    };
    AccountsService.prototype.resetPassword = function (token, newPassword) {
        var _this = this;
        this.$meteor.resetPassword(token, newPassword)
            .then(function (e) {
            _this.handler(e);
        });
    };
    AccountsService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        this.$meteor.changePassword(oldPassword, newPassword)
            .then(function (e) {
            _this.handler(e);
        });
    };
    AccountsService.prototype.verifyEmail = function (token) {
        var _this = this;
        this.$meteor.verifyEmail(token)
            .then(function (e) {
            _this.handler(e);
        });
    };
    return AccountsService;
})();
AccountsService.$inject = ['$meteor', '$state', 'ACCOUNT_SETTINGS'];
/**
 * Accounts Service
 * handles login, oAuth, logout
 * @type {angular.module}
 */
angular.module('shmck.accounts').service('Accounts', AccountsService);
//# sourceMappingURL=accounts.service.js.map