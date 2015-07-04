///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ItemObjectCtrl = (function () {
    function ItemObjectCtrl(item) {
        this.item = item;
        this.item = item;
    }
    return ItemObjectCtrl;
})();
ItemObjectCtrl.$inject = ['item'];
/**
 * Item Object from $stateParams.itemId
 * todo: refactor into directive when using new-angular-router
 * @type {anuglar.module}
 */
angular.module('shmck.items').controller('ItemObjectCtrl', ItemObjectCtrl);
//# sourceMappingURL=item.js.map