import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs.tsx';
import LoginCard from '@/components/auth/login-card.tsx';
import RegisterCard from '@/components/auth/register-card.tsx';
import {PackageOpenIcon} from 'lucide-react';

export default function AuthPage() {
  return (
      <div className='my-32 flex flex-col items-center justify-center space-y-8'>
        <div className='flex items-center space-x-2'>
          <PackageOpenIcon className='size-12'/>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>꾸러미탑</h1>
        </div>
        <Tabs defaultValue='login' className='w-96'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='login'>로그인</TabsTrigger>
            <TabsTrigger value='register'>회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value='register'>
            <RegisterCard />
          </TabsContent>
          <TabsContent value='login'>
            <LoginCard />
          </TabsContent>
        </Tabs>
      </div>
  )
}