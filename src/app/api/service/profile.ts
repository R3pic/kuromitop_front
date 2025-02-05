import { Profile } from "../types";
import { APIfetch } from "../fetch";

export async function fetchProfile(username: string): Promise<Profile> {
    const response = await APIfetch(`/users/${username}/profile`, {
        method: 'GET',
        auth: true,
    });
    return response.json();
}