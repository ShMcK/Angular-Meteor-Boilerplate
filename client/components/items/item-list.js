///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ItemListCtrl = (function () {
    //orderProperty:number; // 1 | -1
    function ItemListCtrl($meteor, $scope) {
        var _this = this;
        /**
         * Defaults
         * page | perPage | sort | itemCount | search | orderProperty
         */
        this.list = {
            page: 1,
            perPage: 10,
            sort: {
                title: 1
            }
        };
        this.itemCount = null;
        this.search = '';
        $scope.orderProperty = 1;
        /**
         * Reactive, runs on $scope change
         * limit | skip | sort | search
         * @type {meteor.autorun}
         */
        $meteor.autorun($scope, function () {
            $meteor.subscribe('items', {
                // $scope.getReactively(string) watches & auto-updates values from the template $scope
                limit: parseInt($scope.getReactively('itemList.list.perPage')),
                skip: (parseInt($scope.getReactively('itemList.list.page')) - 1) *
                    parseInt($scope.getReactively('itemList.list.sort')),
                sort: $scope.getReactively('itemList.list.sort')
            }, $scope.getReactively('itemList.search')).then(function () {
                _this.itemCount = $meteor.object(Counts, 'numberOfItems', false);
            });
        });
        // update list on sort change
        this.items = $meteor.collection(function () {
            return Items.find({}, {
                sort: $scope.getReactively('itemList.list.sort')
            });
        });
        // watch sort orderProperty
        $scope.$watch('orderProperty', function () {
            if ($scope.orderProperty) {
                _this.list.sort = { title: parseInt($scope.orderProperty) };
            }
        });
    }
    return ItemListCtrl;
})();
ItemListCtrl.$inject = ['$meteor', '$scope'];
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
//# sourceMappingURL=item-list.js.map