export interface Auth {
  userId: string;
  username: string;
}

export interface SpotifyTrack {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
}

export interface TrackItem extends Track {
  recent_comment: RecentComment
}

export interface Track {
  owner: string;
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
  id: string;
  display_name: string;
  introduction: string;
  thumbnail: string;
}

export interface Bundle {
  id: string;
  title: string;
  is_private: boolean;
}