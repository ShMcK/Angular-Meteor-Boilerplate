///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 * Ui.Router Configuration
 * @type {angular.module}
 */
angular.module('app')
    .config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}).run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('main');
            }
        });
    }]);
//# sourceMappingURL=router.js.map