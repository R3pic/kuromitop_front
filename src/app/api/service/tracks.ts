import { APIfetch } from "../fetch";
import { Comment, Track } from "../types";

type TrackDetail = Pick<Track, 'title' | 'artist' | 'thumbnail'> & { comments: Comment[] };

export async function fetchTrackDetail(trackId: string): Promise<TrackDetail> {
    const response = await APIfetch(`/tracks/${trackId}/comments`, { method: 'GET', auth: true });
    const data = await response.json();
    return {
        ...data,
        comments: data.comments.map((comment: Comment) => ({ ...comment, created_at: new Date(comment.created_at)}))
    };
}