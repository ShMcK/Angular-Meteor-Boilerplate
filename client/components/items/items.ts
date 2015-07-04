///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ItemListCtrl {
  items: angular.meteor.AngularMeteorCollection<IItem>;
  constructor($meteor: angular.meteor.IMeteorService) {
    this.items = $meteor.collection<IItem>(Items).subscribe('items');
  }
}
ItemListCtrl.$inject = ['$meteor'];

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