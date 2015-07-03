///<reference path="../../typings/typings.d.ts" />

var MODE = 'development'; // change later

function productionOptimizations($compileProvider:angular.ICompileProvider, $httpProvider:angular.IHttpProvider):void {
  if (MODE === 'production') {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
  }
}

/**
 * Production Mode Speed Optimizations
 * @type {angular.module}
 */
angular.module("app")
  .config(productionOptimizations);