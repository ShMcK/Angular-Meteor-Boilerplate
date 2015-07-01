///<reference path="../../typings/typings.d.ts" />
'use strict';
/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {
    // If no Items
    if (Items.find().count() === 0) {
        console.log('No Items');
    }
    else {
        console.log('Loading items...');
    }
});
//# sourceMappingURL=items.load.js.map