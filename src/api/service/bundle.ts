import { cookies } from "next/headers";
import { BASE_URL } from "../constants";
import { UUID } from "crypto";
import { forbidden } from "next/navigation";
import { Track } from "../types";

export async function fetchBundle(bundleId: UUID): Promise<{
    title: string,
    tracks: Track[],
}> {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('access_token');

    const response = await fetch(`${BASE_URL}/bundles/${bundleId}/tracks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken?.value}`
        }
    });

    if (!response.ok)
        forbidden();

    return response.json();
}