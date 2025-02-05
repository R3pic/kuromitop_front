'use server';
import { createBundleSchema, fetchCreateBundle } from "@/app/api/service/create-bundle";
import { redirect, RedirectType } from "next/navigation";

export async function createBundleAction(_: unknown, formData: FormData) {
    try { 
        const parsed = createBundleSchema.safeParse({
            title: formData.get('title'),
            is_private: formData.get('isprivate')
        });
    
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            return {
                errors,
            };
        }
    
        const response = await fetchCreateBundle(parsed.data)
    
        if (response.status !== 201) {
            const data = await response.json();
            return {
                message: data.message || "로그인 실패",
            };
        }
    } catch (e) {
        console.log(e);
        return { message: '알 수 없는 에러입니다. 관리자에게 문의하세요' }
    }

    redirect("/", RedirectType.replace);
}