///<reference path="../../../typings/typings.d.ts" />
'use strict';

/**
 * AccountsService
 * login, login with OAuth, logout
 */
class AccountsService {
  credentials:ICredentials;
  error:string;

  constructor(public $meteor:angular.meteor.IMeteorService,
              public $state:angular.ui.IStateService) {
    this.credentials = {
      email: '',
      password: ''
    };
    this.error = '';
  }

  private attempt(e) {
    if (e) {
      // error
      this.error = `Login error: ${e}`;
    } else {
      // success
      this.$state.go('main')

    }
  }

  /**
   * Login
   * @returns {Promise|Promise<T>}
   */
  login() {
    this.$meteor.loginWithPassword(this.credentials.email, this.credentials.password)
      .then((e) => {
        this.attempt(e);
      });
  }

  /**
   * Logout
   */
  logout() {
    this.$meteor.logout()
      .then((e) => {
        this.attempt(e);
      });
  }

  /**
   * Login with Facebook
   * @returns {Promise|Promise<T>}
   */
  loginWithFacebook() {
    this.$meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, (e) => {
      this.attempt(e);
    });
  }

  /**
   * Login with Google
   * @returns {Promise|Promise<T>}
   */
  loginWithGoogle() {
    this.$meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, (e) => {
      this.attempt(e);
    });
  }

  /**
   * Login with Twitter
   * @returns {Promise|Promise<T>}
   */
  loginWithTwitter() {
    this.$meteor.loginWithTwitter(
      //  {
      //  requestPermissions: ['email']
      //},
      (e) => {
        this.attempt(e);
      });
  }

  verifyEmail(token:string) {
    this.$meteor.verifyEmail(token);
  }
}
AccountsService.$inject = ['$meteor', '$state'];

/**
 * Accounts Service
 * handles login, oAuth, logout
 * @type {angular.module}
 */
angular.module('shmck.accounts').service('Accounts', AccountsService);