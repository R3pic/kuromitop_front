import { APIfetch } from "../fetch";
import { Profile } from "../types";

export async function fetchMyProfile(): Promise<Profile> {
    const response = await APIfetch(`/users/me`, { method: 'GET', auth: true });
    return response.json();
}