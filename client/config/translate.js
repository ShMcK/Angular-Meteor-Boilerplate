///<reference path="../../typings/typings.d.ts" />
'use strict';
function translate($translateProvider) {
    $translateProvider.useLoader('languageLoader', {});
    $translateProvider.preferredLanguage('en_US');
    // for security purposes
    $translateProvider.useSanitizeValueStrategy('sanitize');
}
function languageLoader($http, $q) {
    return function (options) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'i18n/locale-' + options.key + '.json'
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function () {
            deferred.reject(options.key);
        });
        return deferred.promise;
    };
}
angular.module('app')
    .config(translate)
    .factory('languageLoader', languageLoader);
//# sourceMappingURL=translate.js.map