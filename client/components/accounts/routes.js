///<reference path="../../../typings/typings.d.ts" />
'use strict';
/**
 * Account Routes
 * @type {angular.module}
 */
angular.module('shmck.accounts')
    .config(function ($stateProvider) {
    $stateProvider
        .state('login', {
        url: '/login',
        template: '<shmck-login></shmck-login>'
    })
        .state('register', {
        url: '/register',
        template: '<shmck-register></shmck-register>'
    })
        .state('resetpw', {
        url: '/resetpw',
        template: '<shmck-reset-pw></shmck-reset-pw>'
    })
        .state('logout', {
        url: '/logout',
        resolve: {
            'logout': ['Accounts',
                function (Accounts) {
                    return Accounts.logout();
                }]
        }
    })
        .state('profile', {
        url: '/profile',
        template: '<shmck-profile></shmck-profile>'
    });
});
//# sourceMappingURL=routes.js.map