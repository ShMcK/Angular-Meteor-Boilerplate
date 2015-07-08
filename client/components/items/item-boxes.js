///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ItemBoxCtrl = (function () {
    function ItemBoxCtrl($meteor) {
        var _this = this;
        this.boxes = [{
                color: 'gray',
                row: 3,
                col: 2
            }, {
                color: 'green'
            }, {
                color: 'yellow'
            }, {
                color: 'blue',
                smCol: 2
            }, {
                color: 'purple',
            }, {
                color: 'red',
                row: 2,
                col: 2,
                mdCol: 2
            }, {
                color: 'green',
                row: 2
            }];
        $meteor.subscribe('items');
        this.items = $meteor.collection(function () {
            return Items.find({}, {
                limit: _this.boxes.length
            });
        });
    }
    return ItemBoxCtrl;
})();
ItemBoxCtrl.$inject = ['$meteor'];
function itemBoxes() {
    return {
        templateUrl: 'client/components/items/item-boxes.ng.html',
        controller: ItemBoxCtrl,
        controllerAs: 'box'
    };
}
/**
 * Item Boxes
 * @type {angular.module}
 */
angular.module('shmck.items').directive('itemBoxes', itemBoxes);
//# sourceMappingURL=item-boxes.js.map