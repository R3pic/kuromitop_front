export interface Auth {
  userId: number;
  username: string;
}

export interface TrackItem extends Track {
  recent_comment: RecentComment
}

export interface Track {
  owner: number;
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
}

export interface Comment {
  id: number;
  content: string;
  created_at: Date;
}

export interface RecentComment extends Comment {
  comment_count: number;
}

export interface User {
  name: string;
  nickname: string;
  thumbnail: string;
}

export interface Bundle {
  title: string;
  id: string;
}