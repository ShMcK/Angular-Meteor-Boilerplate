///<reference path="../typings/typings.d.ts" />
'use strict';
declare var Items: Mongo.Collection<IItem>;

Meteor.methods({

  'addItem': function (item:IItem) {
    if (!Meteor.userId()) {
      throw 'Please login first'
    }
    if (typeof item !== 'object')
      throw 'Not a valid challenge';

    // add fields
    item.owner = Meteor.userId();
    item.createdAt = new Date();
    // add other fields

    Items.insert(item);
  },
  'editItem': function (itemId:string, item:IItem) {
    // edit
  },
  'removeItem': function (itemId:string) {
    // remove
  }
});
