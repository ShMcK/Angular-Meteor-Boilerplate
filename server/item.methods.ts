///<reference path="../typings/typings.d.ts" />
'use strict';
declare var Items:Mongo.Collection<IItem>;

Meteor.startup(function ():void {
  /**
   * Items Methods
   * @type {meteor.methods}
   */
  Meteor.methods({
    'addItem': function (item:IItem):void {
      // Not logged in
      if (!Meteor.userId()) {
        throw 'Please login first'
      }
      // Invalid item
      if (typeof item !== 'object')
        throw 'Not a valid challenge';

      // safe!
      // set fields
      item.owner = Meteor.userId();
      item.createdAt = new Date();
      // todo: add other fields

      // insert
      Items.insert(item);
    },
    'editItem': function (itemId:string, item:IItem) {
      // edit
    },
    'removeItem': function (itemId:string) {
      // remove
    }
  });
});
