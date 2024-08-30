export interface BlogEntry {
    id?: number; // Optional, if you need to track the post ID
    title: string;
    content: string;
    author: string;
    date: Date;
  }  