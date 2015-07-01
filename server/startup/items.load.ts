///<reference path="../../typings/typings.d.ts" />
'use strict';

declare var Items:Mongo.Collection<IItem>;

/**
 *  Load Items
 *  @type {meteor.startup}
 */
Meteor.startup(function () {
  // If no Items
  if (Items.find().count() === 0) {
    console.log('No Items');

    // Add Items
    var items:IItem[] = [
      // items here
    ];
    items.forEach(function (item:IItem) {
      Items.insert(item);
    });
  }
});