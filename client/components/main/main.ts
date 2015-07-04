///<reference path="../../../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

class MainCtrl {
  componentName:String;
  items: angular.meteor.AngularMeteorCollection<IItem>;
  constructor($meteor: angular.meteor.IMeteorService) {
    this.componentName = 'main';
    this.items = $meteor.collection<IItem>(Items).subscribe('items');
  }
}
MainCtrl.$inject = ['$meteor'];

function main():angular.IDirective {
  return {
    templateUrl: 'client/components/main/main.ng.html',
    controllerAs: 'main',
    controller: MainCtrl
  };
}

/**
 * Main
 * default home page
 * @type {angular.module}
 */
angular.module('shmck.main')
  .directive('shmckMain', main);