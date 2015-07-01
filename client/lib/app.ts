///<reference path="../../typings/typings.d.ts" />
'use strict';

/**
 *  App Module
 *  @type {angular.module}
 */
angular.module('app', [
  /* dependencies */
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  'pascalprecht.translate',

  /* components */
  'shmck.accounts',
  'shmck.layout',

  /* states */
  'shmck.main',
  'shmck.secondary'
]);

/**
 * Bootstrap App (ng-app)
 */
function onReady() {
  angular.bootstrap(document, ['app']);
}

/**
 * Deliver Mobile Version
 */
if (Meteor.isCordova) {
  angular.element(document).on('deviceReady', onReady);
} else {
  angular.element(document).ready(onReady);
}


