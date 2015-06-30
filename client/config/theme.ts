///<reference path="../../typings/typings.d.ts" />
'use strict';

angular.module('app')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('lime');
  });