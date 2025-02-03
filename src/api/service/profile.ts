import { cookies } from "next/headers";
import { BASE_URL } from "../constants";
import { Profile } from "../types";

export async function fetchProfile(username: string): Promise<Profile> {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('access_token');
    
    const response = await fetch(`${BASE_URL}/users/${username}/profile`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken?.value}`
        }
    });
    return response.json();
}