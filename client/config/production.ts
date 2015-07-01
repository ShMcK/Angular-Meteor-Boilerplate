///<reference path="../../typings/typings.d.ts" />

var MODE = 'development'; // change later

function productionOptimizations($compileProvider:angular.ICompileProvider, $httpProvider:angular.IHttpProvider) {
  if (MODE === 'production') {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
  }
}

angular.module("app")
  .config(productionOptimizations);