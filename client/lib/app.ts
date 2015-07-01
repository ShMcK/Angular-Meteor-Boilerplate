///<reference path="../../typings/typings.d.ts" />
'use strict';

/**
 * Main App Module
 *  @type {angular.module}
 */
angular.module('app', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  'pascalprecht.translate',

  /* modules */
  'shmck.accounts',
  'shmck.layout'
]);

function onReady() {
  angular.bootstrap(document, ['app']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceReady', onReady);
} else {
  angular.element(document).ready(onReady);
}


