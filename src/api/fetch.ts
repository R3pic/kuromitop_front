
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { BASE_URL } from "./constants";

type FetchOption = {
    auth: boolean,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
}

export async function APIfetch<T>(endpoint: string, options: FetchOption): Promise<T> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }

    if (options.auth) {
        const accessToken = (await cookies()).get('access_token');

        if (!accessToken)
            redirect('login');

        headers['Authorization'] = `Bearer ${accessToken.value}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: options.method,
            headers,
    });
    const data = await response.json();

    if (!response.ok)
        console.info(data);

    if (response.status === 403 || response.status === 401) {
        redirect('/login');
    }

    if (response.status === 404) {
        notFound();
    }

    return data;
}