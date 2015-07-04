///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ItemObjectCtrl {
  constructor(public item:IItem) {
    this.item = item;
  }
}
ItemObjectCtrl.$inject = ['item'];

/**
 * Item Object from $stateParams.itemId
 * todo: refactor into directive when using new-angular-router
 * @type {anuglar.module}
 */
angular.module('shmck.items').controller('ItemObjectCtrl', ItemObjectCtrl);