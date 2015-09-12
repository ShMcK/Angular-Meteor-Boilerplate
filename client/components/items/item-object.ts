///<reference path="../../../typings/typings.d.ts" />
'use strict';



class ItemObjectCtrl {
  item:angular.meteor.AngularMeteorObject<IItem>;
//  users:angular.meteor.AngularMeteorCollection<any>;

  constructor($meteor:angular.meteor.IMeteorService,
              $stateParams:any,
              $scope:angular.meteor.IScope) {
                  
                  
//                  console.dir($stateParams);

    // subscribe to users (get avatar, user email, etc.)
// TODO    this.users = $meteor.collection<Meteor.User>(Meteor.users, false).subscribe('users');

    // subscribe to items
    this.item = $meteor.object<IItem>(Items, $stateParams['itemId']);
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

//ItemObjectCtrl.$inject = ['$meteor', '$stateParams', '$scope'];

function itemObject():angular.IDirective {
  return {
    templateUrl: 'client/components/items/item-object.ng.html',
    controller:  ['$meteor', '$stateParams', '$scope', ItemObjectCtrl ] ,
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
angular.module('shmck.items').directive('itemObject',  itemObject);