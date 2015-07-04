///<reference path="../../../typings/typings.d.ts" />
'use strict';

/**
 * Item Routes
 * @type {angular.module}
 */
angular.module('shmck.items')
  .config(function ($stateProvider:angular.ui.IStateProvider) {
    $stateProvider
      .state('item', {
        url: '/items/:itemId',
        template: '<item-object></item-object>'
      });
  });