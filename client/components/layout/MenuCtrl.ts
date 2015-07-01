///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface IMenuItem {
  name: string;
  link: string;
}

class MenuCtrl {
  items: IMenuItem[];
  constructor() {
    this.items = [{
      name: 'NAV.MAIN',
      link: 'main'
    }, {
      name: 'NAV.SECONDARY',
      link: 'secondary'
    }]
  }
}

angular.module('app').controller('MenuCtrl', MenuCtrl);