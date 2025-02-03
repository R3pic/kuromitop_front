import { BASE_URL } from "../constants";
import { Track } from "../types";

export async function fetchRecentTracks(): Promise<Track[]> {
    const response = await fetch(`${BASE_URL}/tracks/recent-comments`, {
        method: 'GET',
    });
    return response.json()
}