export interface Track {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  recent_comment: RecentComment
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