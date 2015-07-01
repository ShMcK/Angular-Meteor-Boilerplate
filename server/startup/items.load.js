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
        // Add Items
        var items = [];
        items.forEach(function (item) {
            Items.insert(item);
        });
    }
});
//# sourceMappingURL=items.load.js.map