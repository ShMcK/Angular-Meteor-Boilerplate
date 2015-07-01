///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Routes
 * @type {angular.module}
 */
angular.module('app')
    .config(function ($stateProvider) {
    $stateProvider
        .state('main', {
        url: '/',
        template: "<shmck-main></shmck-main>"
    })
        .state('secondary', {
        url: '/secondary',
        template: '<secondary></secondary>'
    });
});
//# sourceMappingURL=routes.js.map