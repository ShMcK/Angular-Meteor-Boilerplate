///<reference path="../../../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

class SecondaryCtrl {
  componentName:String;
  items: any; //IItem[];
  constructor($meteor: angular.meteor.IMeteorService) {
    this.componentName = 'secondary';
    this.items = $meteor.collection(Items).subscribe('items');

  }
}
SecondaryCtrl.$inject = ['$meteor'];

function secondary():angular.IDirective {
  return {
    templateUrl: 'client/components/secondary/secondary.ng.html',
    controllerAs: 'secondary',
    controller: SecondaryCtrl,
  };
}

/**
 * Secondary
 * @type {angular.module}
 */
angular.module('shmck.secondary')
  .directive('secondary', secondary);