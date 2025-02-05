import { APIfetch } from "../fetch";
import { Profile } from "../types";

export async function fetchMyProfile() {
    const data = await APIfetch<Profile>(`/users/me`, { method: 'GET', auth: true });
    return data;
}