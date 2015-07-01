/////<reference path="../typings/typings.d.ts" />

declare var Items:any,
  SimpleSchema:any;

Items = new Mongo.Collection<IItem>('items');

var Schemas: any = {};

Schemas.Item = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    optional: true
  },
  title: {
    type: String,
    optional: false,
    //editableBy: ['member', 'admin']
  },
  body: {
    type: String,
    optional: true,
    //editableBy: ['member', 'admin']
  },
  viewCount: {
    type: Number,
    optional: true
  },
  clickCount: {
    type: Number,
    optional: true
  },
  upVotes: {
    type: Number,
    optional: true
  },
  upVoters: {
    type: [String],
    optional: true
  },
  downVotes: {
    type: Number,
    optional: true
  },
  downVoters: {
    type: [String],
    optional: true
  },
  author: {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    optional: true
    //editable: ['admin']
  }
});

//Schema.Item.internationalize();

Items.attachSchema(Schemas.Item);

//Items.allow({
//  update: function ():boolean {},
//  remove: function ():boolean {}
//});
