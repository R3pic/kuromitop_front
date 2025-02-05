import { BASE_URL } from "@/app/api/constants"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    console.log('api/auth/refresh 호출됨.');
    const cookieStore = await cookies();

    console.log(cookieStore.getAll());

    const { refreshToken } = await request.json();
    console.log(refreshToken);

    if (!refreshToken) {
        console.log('리프레시 토큰이 없음');
        redirect('/login');
    }

    const headers = {
        'Authorization': `Bearer ${refreshToken}`,
    }

    return await fetch(`${BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers,
        credentials: 'include'
})
}