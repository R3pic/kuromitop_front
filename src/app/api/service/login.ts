import { z } from "zod";
import { BASE_URL } from "../constants";

export const loginSchema = z.object({
    username: z.string().min(5, { message: '아이디는 최소 5글자여야 합니다. '}).toLowerCase(),
    password: z.string().min(8, { message: '비밀번호는 최소 8글자여야 합니다.'})
});

export type LoginDto = z.infer<typeof loginSchema>;

export async function Login(LoginDto: LoginDto) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(LoginDto),
        credentials: 'include'
    })

    return response;
}