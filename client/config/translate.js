///<reference path="../../typings/typings.d.ts" />
'use strict';
function translate($translateProvider) {
    $translateProvider.useLoader('languageLoader', {});
    $translateProvider.preferredLanguage('en_US');
    // for security purposes
    $translateProvider.useSanitizeValueStrategy('sanitize');
}
function languageLoader($http) {
    return function (options) {
        return new Promise(function (resolve, reject) {
            $http({
                method: 'GET',
                url: 'i18n/locale-' + options.key + '.json'
            }).success(function (data) {
                resolve(data);
            }).error(function (e) {
                console.log("Language Loader Error: " + e);
                reject(options.key);
            });
        });
    };
}
/**
 * Angular Translate Setup
 * @type {angular.module}
 */
angular.module('app')
    .config(translate)
    .factory('languageLoader', languageLoader);
//# sourceMappingURL=translate.js.map