///<reference path="../typings.d.ts" />

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

// todo: remove option from owner, userId, author, createdAt later