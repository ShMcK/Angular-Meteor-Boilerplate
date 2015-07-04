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
        // refactor into component when new-angular-router is available
        templateUrl: 'client/components/items/item-object.ng.html',
        controller: 'ItemObjectCtrl',
        controllerAs: 'item',
        resolve: {
            'item': ['$stateParams', '$meteor', function ($stateParams, $meteor) {
                    return $meteor.object(Items, $stateParams.itemId, false);
                }]
        }
    });
});
//# sourceMappingURL=route.js.map