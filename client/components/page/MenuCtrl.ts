///<reference path="../../../typings/typings.d.ts" />
'use strict';

interface IMenuItem {
  name: string;
  link: string;
}

class MenuCtrl{
  items: IMenuItem[];
  constructor() {
    this.items = [{
      name: 'Main',
      link: 'main'
    }, {
      name: 'Secondary',
      link: 'secondary'
    }]
  }
}

angular.module('app').controller('MenuCtrl', MenuCtrl);