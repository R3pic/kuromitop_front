import { Login, loginSchema } from "@/api/service/login";
import { redirect, RedirectType } from "next/navigation";


export async function loginAction(_: unknown, formData: FormData) {
    try { 
        const parsed = loginSchema.safeParse({
            username: formData.get('username'),
            password: formData.get('password')
        });
    
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            return {
                errors,
            };
        }
    
        const response = await Login(parsed.data);
    
        if (!response.ok) {
            const data = await response.json();
            return {
                message: data.message || "로그인 실패",
            };
        }
    } catch (e) {
        console.log(e);
        return { message: '로그인에 실패했습니다. 관리자에게 문의하세요. '}
    }

    redirect("/", RedirectType.push);
}