///<reference path="../../../typings/typings.d.ts" />

angular.module('app')
  .directive('shmckFooter', shmckFooter);

class Footer {
  componentName:String;

  constructor() {
    this.componentName = 'footer';
  }
}

function shmckFooter() {
  return {
    templateUrl: 'client/components/footer/footer.ng.html',
    controllerAs: 'footer',
    controller: Footer
  };
}