import { cookies } from "next/headers";
import { BASE_URL } from "../constants";

export async function fetchProfile(username: string) {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('access_token');
    
    const response = await fetch(`${BASE_URL}/users/${username}/profile`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    return response.json();
}