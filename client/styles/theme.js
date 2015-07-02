///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 * Material Design Theme Set
 * @type {angular.module}
 */
angular.module('app')
    .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('grey');
});
//# sourceMappingURL=theme.js.map