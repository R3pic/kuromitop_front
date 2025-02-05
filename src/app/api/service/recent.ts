import { APIfetch } from "../fetch";
import { Track } from "../types";

export async function fetchRecentTracks(): Promise<Track[]> {
    const response = await APIfetch<Track[]>(`/tracks/recent-comments`, { method: 'GET', auth: false});
    return response;
}