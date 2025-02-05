import { cookies } from "next/headers";
import { forbidden, notFound, redirect, RedirectType } from "next/navigation";
import { BASE_URL } from "./constants";

type FetchOption = {
    auth: boolean,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
}

export async function APIfetch<T>(endpoint: string, options: FetchOption): Promise<T> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }

    const cookieStore = await cookies();

    if (options.auth) {
        const accessToken = cookieStore.get('access_token');

        if (!accessToken)
            redirect('login');

        headers['Authorization'] = `Bearer ${accessToken.value}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: options.method,
        headers,
        credentials: 'include'
    });

    const data = await response.json();

    if (!response.ok)
        console.error(data);

    if (response.status === 401) {
        // 서버 사이드에서 새로 발급 받은 액세스 토큰을 클라이언트에 적용하는 것에 패배했다.....
        console.log('액세스 토큰이 만료되거나 권한이 없음');
        redirect('/login', RedirectType.push);
        // const cookieStore = await cookies();
        // const refreshToken = cookieStore.get('refresh_token');
        // console.log('리프레시 토큰', refreshToken);
        // await tokenRefresh();
        // headers['Authorization'] = `Bearer ${refreshToken?.value}`;

        // const response = await fetch(`${BASE_URL}/auth/refresh`, {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers,
        // });

        // console.log(response);
        // if (response.status === 401) {
        //     console.log('리프레시 토큰조차 만료되었음');
        //     redirect('/login')
        // }

        // const newReqHeaders = response.headers.getSetCookie();
        // console.log(newReqHeaders);

        // const newAccessToken = newReqHeaders

        // cookieStore.set('access_token', newReqHeaders[0]);

        // return await APIfetch(endpoint, options);
    }

    if (response.status === 403) {
        forbidden();
    }

    if (response.status === 404) {
        notFound();
    }

    return data;
}