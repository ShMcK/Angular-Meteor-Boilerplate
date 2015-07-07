///<reference path="../typings.d.ts" />
declare var Fake: any;
declare var Items: Mongo.Collection<IItem>;
declare var Counts: any; // tmeasday:publish-counts package

interface IItem {
  id?: string;
  title: string;
  author?: string;
  owner?: string;
  userId?: string;
  createdAt?: Date;
  body?: string;
  viewCount?: number;
  clickCount?: number;
  upVotes?: number;
  upVoters?: [string];
  downVotes?: number;
  downVoters?: [string];
}

interface IItemList {
  page: number;
  perPage: number;
  sort: {
    [key:string]: number;
  }
}

interface ICollectionOptions {
  limit: number;
  skip: number;
  sort: {
    [key:string]: number;
  }
}

// todo: remove option from owner, userId, author, createdAt later