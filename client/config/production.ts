///<reference path="../../typings/typings.d.ts" />

var MODE = 'development'; // change later

function productionOptimizations($compileProvider, $httpProvider) {
  if (MODE === 'production') {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
  }
}

angular.module("app")
  .config(productionOptimizations);