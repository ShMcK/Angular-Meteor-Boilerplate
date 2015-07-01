///<reference path="../../typings/typings.d.ts" />
'use strict';

function translate($translateProvider:angular.translate.ITranslateProvider) {
  $translateProvider.useLoader('languageLoader', {});
  $translateProvider.preferredLanguage('en_US');

  // for security purposes
  $translateProvider.useSanitizeValueStrategy('sanitize');
}

interface ILanguageOptions {
  key: string;
}

function languageLoader($http:angular.IHttpService, $q:angular.IQService) {
  return function (options:ILanguageOptions) {
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