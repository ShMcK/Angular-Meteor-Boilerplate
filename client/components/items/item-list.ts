///<reference path="../../../typings/typings.d.ts" />
'use strict';


class ItemListCtrl {
  items:angular.meteor.AngularMeteorCollection<IItem>;
  list:IItemList; // page | perPage | sort
  itemCount:any; // total number of items in DB
  search:string;
  updateOrder:number;
  busy:boolean;
  //orderProperty:number; // 1 | -1

  constructor($meteor:angular.meteor.IMeteorService,
              $scope:angular.IScope) {
    /**
     * Defaults
     * page | perPage | sort | itemCount | search | orderProperty
     */
    this.list = {
      page: 1,
      perPage: 3,
      sort: {
        title: 1
      }
    };
    this.itemCount = null;
    this.search = '';
    this.updateOrder = 1;

    // loading
    this.busy = false;

    /**
     * Reactive, runs on $scope change
     * limit | skip | sort | search
     * @type {meteor.autorun}
     */
    $meteor.autorun($scope, () => {
      $meteor.subscribe('items', {
        // $scope.getReactively(string) watches & auto-updates values from the template $scope
        limit: parseInt($scope.getReactively('itemList.list.perPage')),
        //skip: (parseInt($scope.getReactively('itemList.list.page')) - 1) *
        //       parseInt($scope.getReactively('itemList.list.sort')),
        sort: $scope.getReactively('itemList.list.sort')
      }, $scope.getReactively('itemList.search'))
        .then(() => {
          this.itemCount = $meteor.object(Counts, 'numberOfItems', false);
        });
    });

    // update list on sort change
    var subscriptionHandle;
    this.items = $meteor.collection<IItem>(function () {
      return Items.find({}, {
        sort: $scope.getReactively('itemList.list.sort')
      })
    });

    // watch sort orderProperty
    $scope.$watch('itemList.updateOrder', () => {
      if (this.updateOrder) {
        this.list.sort = {title: parseInt(this.updateOrder)}
      }
    });
  }

  //pageChanged(newPage) {
  //  this.list.page = newPage;
  //}
  loadMore() {
    this.busy = true;
    console.log('loading...');
    this.list.perPage += 3;
    // todo: async timeout until this.items.length === this.list.perPage
    this.busy = false;

  }
}
ItemListCtrl.$inject = ['$meteor', '$scope'];

function itemList():angular.IDirective {
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