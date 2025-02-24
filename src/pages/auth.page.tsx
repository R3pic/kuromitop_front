import { PackageOpenIcon } from 'lucide-react';
import SpotifyLoginButton from '@/components/auth/spotify-login-button.tsx';
import {useEffect} from 'react';
import axiosInstance from '@/api/api.ts';
import {NavLink, useNavigate} from 'react-router';

export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function isLogin() {
      if (localStorage.getItem('isGuest') === 'false') {
        const res = await axiosInstance.post('/auth/login');

        if (res.status === 204)
          navigate('/home');
      }
    }

    void isLogin();
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      {/* 헤더 */}
      <div className="mb-12 flex items-center space-x-3">
        <PackageOpenIcon className="size-12" />
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
          꾸러미탑
        </h1>
      </div>

      {/* 소개글 */}
      <div className="mb-8 max-w-2xl text-center space-y-6">
        <h3 className="text-2xl font-semibold">음악을 모아, 기억을 쌓다</h3>
        <p className="text-md">
          좋아했던 노래, 잊고 있던 멜로디.<br />
          한 곡 한 곡이 당신만의 플레이리스트가 되고,<br />
          시간이 지나도 다시 꺼내볼 수 있는 음악 기록이 됩니다.
        </p>
        <p className="text-md">
          꾸러미탑에서 당신만의 음악 컬렉션을 만들어보세요.<br />
          곡마다 남기는 메모와 함께, 그 순간의 감정을 기록하고<br />
          나만의 플레이리스트를 완성하세요.
        </p>
      </div>

      {/* 로그인 버튼 */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <SpotifyLoginButton />
        <NavLink to='/home' onClick={() => localStorage.setItem('isGuest', 'true')}>
          <p className='text-muted-foreground text-sm underline underline-offset-2'>게스트로 입장하기</p>
        </NavLink>
      </div>
    </div>
  );
}
