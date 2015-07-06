///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 *  App Module
 *  @type {angular.module}
 */
angular.module('app', [
    /* Angular packages */
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    /* third party */
    'angular-meteor',
    'ui.router',
    'pascalprecht.translate',
    'infinite-scroll',
    /* load components */
    'shmck.accounts',
    'shmck.layout',
    'shmck.items',
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
}
else {
    angular.element(document).ready(onReady);
}
//# sourceMappingURL=app.js.map