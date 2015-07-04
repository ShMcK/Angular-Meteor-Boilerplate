///<reference path="../../../typings/typings.d.ts" />
'use strict';
/**
 * Item Routes
 * @type {angular.module}
 */
angular.module('shmck.items')
    .config(function ($stateProvider) {
    $stateProvider
        .state('item', {
        url: '/items/:itemId',
        template: '<item-object></item-object>'
    });
});
//# sourceMappingURL=route.js.map