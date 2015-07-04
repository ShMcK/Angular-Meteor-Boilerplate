///<reference path="../typings/typings.d.ts" />
'use strict';
/**
 * Publish
 * @type {meteor.publish}
 */
Meteor.publish('items', function (options) {
    return Items.find({}, options);
    // todo: publish limited amount
});
//# sourceMappingURL=items.publish.js.map