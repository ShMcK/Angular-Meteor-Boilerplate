/////<reference path="../typings/typings.d.ts" />
Items = new Mongo.Collection('items');
var Schemas = {};
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
    },
    body: {
        type: String,
        optional: true,
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
    }
});
//Schema.Item.internationalize();
Items.attachSchema(Schemas.Item);
//Items.allow({
//  update: function ():boolean {},
//  remove: function ():boolean {}
//});
//# sourceMappingURL=items.js.map