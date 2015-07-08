///<reference path="../../../typings/typings.d.ts" />
'use strict';

class ItemObjectCtrl {
  item:angular.meteor.AngularMeteorObject<IItem>;
  users:angular.meteor.AngularMeteorCollection<any>;

  constructor($meteor:angular.meteor.IMeteorService,
              $stateParams:angular.ui.IStateParamsService,
              $scope:angular.IScope) {

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
}
ItemObjectCtrl.$inject = ['$meteor', '$stateParams', '$scope'];

function itemObject():angular.IDirective {
  return {
    templateUrl: 'client/components/items/item-object.ng.html',
    controller: ItemObjectCtrl,
    controllerAs: 'itemObject',
    scope: {
      previousState: '@'
    }
  }
}


/**
 * Item Object from $stateParams.itemId
 * @type {anuglar.module}
 */
angular.module('shmck.items').directive('itemObject', itemObject);