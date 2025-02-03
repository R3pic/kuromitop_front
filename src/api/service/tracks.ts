import { APIfetch } from "../fetch";
import { Comment, Track } from "../types";

type TrackDetail = Pick<Track, 'title' | 'artist' | 'thumbnail'> & { comments: Comment[] };

export async function fetchTrackDetail(trackId: string): Promise<TrackDetail> {
    const data = await APIfetch<TrackDetail>(`/tracks/${trackId}/comments`, { method: 'GET', auth: true });
    
    return {
        ...data,
        comments: data.comments.map((comment: Comment) => ({ ...comment, created_at: new Date(comment.created_at)}))
    };
}