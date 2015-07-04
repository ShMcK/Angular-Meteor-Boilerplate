///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ItemListCtrl = (function () {
    function ItemListCtrl($meteor) {
        this.items = $meteor.collection(Items).subscribe('items');
    }
    return ItemListCtrl;
})();
ItemListCtrl.$inject = ['$meteor'];
function itemList() {
    return {
        templateUrl: 'client/components/items/item-list.ng.html',
        controllerAs: 'itemList',
        controller: ItemListCtrl
    };
}
/**
 * Items
 * default home page
 * @type {angular.module}
 */
angular.module('shmck.items')
    .directive('itemList', itemList);
//# sourceMappingURL=items.js.map