import { z } from "zod";
import { BASE_URL } from "../constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createBundleSchema = z.object({
    title: z.string().max(20, '꾸러미 이름은 20글자 이하여야 합니다.'),
    is_private: z.string().nullable().transform((val) => !!val)
});

type CreateBundleDto = z.infer<typeof createBundleSchema>;

export async function fetchCreateBundle(dto: CreateBundleDto) {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get('access_token');

    if (!accessToken)
        redirect('/');
    const response = await fetch(`${BASE_URL}/bundles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken.value}`
            },
            body: JSON.stringify(dto),
            credentials: 'include'
    })
    return response;
}