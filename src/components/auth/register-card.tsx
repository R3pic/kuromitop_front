import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import RegisterForm from '@/components/auth/register-form.tsx';

export default function RegisterCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>회원가입을 진행합니다.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}