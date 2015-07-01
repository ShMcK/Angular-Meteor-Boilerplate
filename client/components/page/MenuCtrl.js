///<reference path="../../../typings/typings.d.ts" />
'use strict';
var MenuCtrl = (function () {
    function MenuCtrl() {
        this.items = [{
                name: 'Main',
                link: 'main'
            }, {
                name: 'Secondary',
                link: 'secondary'
            }];
    }
    return MenuCtrl;
})();
angular.module('app').controller('MenuCtrl', MenuCtrl);
//# sourceMappingURL=MenuCtrl.js.map