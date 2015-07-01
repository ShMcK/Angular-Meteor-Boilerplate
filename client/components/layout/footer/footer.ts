///<reference path="../../../../typings/typings.d.ts" />

class FooterCtrl {}

function footer():angular.IDirective {
  return {
    templateUrl: 'client/components/layout/footer/footer.ng.html',
    controllerAs: 'footer',
    controller: FooterCtrl
  };
}

/**
 * Footer
 * @type {angular.module}
 */
angular.module('shmck.layout')
  .directive('shmckFooter', footer);