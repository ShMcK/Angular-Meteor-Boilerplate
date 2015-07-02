///<reference path="../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

/**
 * Publish
 * @type {meteor.publish}
 */
Meteor.publish('items', function(options) {
  return Items.find({}, options);
});