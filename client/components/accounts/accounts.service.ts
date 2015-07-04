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
              public $state:angular.ui.IStateService,
              private ACCOUNT_SETTINGS) {
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
  private handler(e) {
    if (e) {
      // error
      this.error = `Error: ${e}`;
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
        this.handler(e);
      });
  }

  /**
   * Register new user
   */
  register() {
    //var validEmail = this.verifyEmail(this.credentials.email); // todo
    this.$meteor.createUser(this.credentials)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Logout
   */
  logout() {
    this.$meteor.logout()
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Login with OAuth
   * Facebook, Twitter, Google, Github, Weibo, MeteorDev, Meetup
   * @returns {Promise|Promise<T>}
   */
  loginWithFacebook() {
    this.$meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, (e) => {
      this.handler(e);
    });
  }

  loginWithGoogle() {
    this.$meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, (e) => {
      this.handler(e);
    });
  }

  loginWithTwitter() {
    this.$meteor.loginWithTwitter({},
      // uncomment if granted email access from Twitter
      //  {
      //  requestPermissions: ['email']
      //},
      (e) => {
        this.handler(e);
      });
  }

  /**
   * Password
   */
  forgotPassword(credential:{email: string}) {
    this.$meteor.forgotPassword(credential)
      .then((e) => {
        this.handler(e);
      });
  }

  resetPassword(token:string, newPassword:string) {
    this.$meteor.resetPassword(token, newPassword)
      .then((e) => {
        this.handler(e);
      });
  }

  changePassword(oldPassword:string, newPassword:string) {
    this.$meteor.changePassword(oldPassword, newPassword)
      .then((e) => {
        this.handler(e);
      });
  }


  verifyEmail(token:string) {
    this.$meteor.verifyEmail(token)
      .then((e) => {
        this.handler(e);
      })
  }
}
AccountsService.$inject = ['$meteor', '$state', 'ACCOUNT_SETTINGS'];

/**
 * Accounts Service
 * handles login, oAuth, logout
 * @type {angular.module}
 */
angular.module('shmck.accounts').service('Accounts', AccountsService);