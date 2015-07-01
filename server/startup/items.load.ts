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
    //let items:IItem[] = [];
    //items.forEach(function (item:IItem) {
    //  Items.insert(item);
    //});
  } else {
    console.log('Loading items...');
  }
});