///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface box {
  color: string;
  row?: number;
  col?: number;
  mdCol?: number;
}

class ItemBoxCtrl {
  items: angular.meteor.AngularMeteorCollection<IItem>;
  boxes: box[];
  constructor($meteor:angular.meteor.IMeteorService) {
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
    this.items = $meteor.collection<IItem>(() => {
      return Items.find({}, {
        limit: this.boxes.length
      })
    });
  }
}
ItemBoxCtrl.$inject = ['$meteor'];


function itemBoxes ():angular.IDirective {
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