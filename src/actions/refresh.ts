
import { BASE_URL } from "@/app/api/constants"
import { cookies } from "next/headers"
import { redirect, RedirectType } from "next/navigation"

export async function tokenRefresh() {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get("refreshToken")?.value

  if (!refreshToken) {
    console.log('리프레시 토큰이 없음');
    redirect('/login', RedirectType.push);
  }

  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
    credentials: 'include'
  })

  if (response.status === 401) {
    redirect('/login', RedirectType.push);
  }
}
