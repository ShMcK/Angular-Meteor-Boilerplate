Meteor.methods({

  'addItem': function (item) {
    if (!Meteor.userId()) {
      throw 'Please login first'
    }
    if (typeof item !== 'object')
      throw 'Not a valid challenge';

    // add fields
    item.owner = Meteor.userId();
    challenge.createdAt = new Date();
    // add other fields

    Items.insert(item);
  },
  'editItem': function(itemId, item) {
      // edit
  },
  'removeItem': function(itemId) {
      // remove
  }
});