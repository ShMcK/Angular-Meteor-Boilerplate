interface IItem {
  id?: string;
  createdAt?: Date;
  title: string;
  body?: string;
  viewCount?: number;
  clickCount?: number;
  upVotes?: number;
  upVoters?: [string];
  downVotes?: number;
  downVoters?: [string];
  author: string;
  userId: string;
}