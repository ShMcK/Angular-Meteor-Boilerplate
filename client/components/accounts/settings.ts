///<reference path="../../../typings/typings.d.ts" />
'use strict';

const ACCOUNT_SETTINGS = {
  validateEmail: true,
  verifyEmail: true
};

/**
 * Account Settings
 * @type {angular.module}
 */
angular.module('shmck.accounts').constant('ACCOUNT_SETTINGS', ACCOUNT_SETTINGS);