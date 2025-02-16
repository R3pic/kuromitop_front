import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import LoginForm from '@/components/auth/login-form.tsx';

export default function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>로그인을 진행합니다.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <LoginForm />
      </CardContent>
    </Card>
  )
}