///<reference path="../../typings/typings.d.ts" />
var MODE = 'development'; // change later
function productionOptimizations($compileProvider, $httpProvider) {
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
//# sourceMappingURL=production.js.map