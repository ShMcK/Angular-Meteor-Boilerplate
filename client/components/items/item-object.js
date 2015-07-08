///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ItemObjectCtrl = (function () {
    function ItemObjectCtrl($meteor, $stateParams, $scope) {
        // subscribe to users (get avatar, user email, etc.)
        this.users = $meteor.collection(Meteor.users, false).subscribe('users');
        // subscribe to items
        this.item = $meteor.object(Items, $stateParams.itemId);
        var subscriptionHandle;
        $meteor.subscribe('items').then(function (handle) {
            subscriptionHandle = handle;
        });
        // unsubscribe on destroy
        $scope.$on('$destroy', function () {
            subscriptionHandle.stop();
        });
    }
    return ItemObjectCtrl;
})();
ItemObjectCtrl.$inject = ['$meteor', '$stateParams', '$scope'];
function itemObject() {
    return {
        templateUrl: 'client/components/items/item-object.ng.html',
        controller: ItemObjectCtrl,
        controllerAs: 'itemObject',
        scope: {
            previousState: '@'
        }
    };
}
/**
 * Item Object from $stateParams.itemId
 * @type {anuglar.module}
 */
angular.module('shmck.items').directive('itemObject', itemObject);
//# sourceMappingURL=item-object.js.map