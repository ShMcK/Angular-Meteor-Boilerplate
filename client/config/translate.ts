///<reference path="../../typings/typings.d.ts" />
'use strict';

function translate($translateProvider:angular.translate.ITranslateProvider):void {
  $translateProvider.useLoader('languageLoader', {});
  $translateProvider.preferredLanguage('en_US');

  // for security purposes
  $translateProvider.useSanitizeValueStrategy('sanitize');
}

interface ILanguageOptions {
  key: string;
}

function languageLoader($http:angular.IHttpService) {
  return function (options:ILanguageOptions):Promise<Object> {
    return new Promise(function (resolve, reject) {
      $http({
        method: 'GET',
        url: 'i18n/locale-' + options.key + '.json'
      }).success(function (data) {
        resolve(data);
      }).error(function (e) {
        console.log(`Language Loader Error: ${e}`);
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