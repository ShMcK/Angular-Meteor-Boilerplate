///<reference path="../../../typings/typings.d.ts" />
'use strict';




/**
 * Item Routes
 * @type {angular.module}
 */
angular.module('shmck.items')
  .config(['$stateProvider',function ($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
      .state('item', {
        url: '/items/:itemId',
        template: '<item-object previous-state="{{pre.previousState}}"></item-object>',
        resolve: {
          previousState: ["$state", function ($state:angular.ui.IStateService) {
            return    $state.current.name ;
          }]
        },
        // wrap in controller until component router is available
        controller:['previousState',  function(previousState) {
          this.previousState = previousState || 'main';
        }] ,
        controllerAs: 'pre'
      });
  }]);