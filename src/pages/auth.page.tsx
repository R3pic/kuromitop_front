import { PackageOpenIcon } from 'lucide-react';
import SpotifyLoginButton from '@/components/auth/spotify-login-button.tsx';
import {useEffect} from 'react';
import axiosInstance from '@/api/api.ts';
import {useNavigate} from 'react-router';

export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function isLogin() {
      const res = await axiosInstance.post('/auth/login');

      if (res.status === 204)
        navigate('/home');
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
      <div className="max-w-2xl text-center space-y-6">
        <h3 className="text-2xl font-semibold">음악을 꾸러미에 담다</h3>
        <p className="text-md">
          한때는 매일 듣던 노래, 어느 순간 잊혀진 멜로디.<br />
          문득 흘러나온 소리에 그때의 공기, 감정, 순간들이 되살아난다.<br />
          음악은 그렇게, 시간 속에 묻어둔 기억을 다시금 꺼내게 한다.
        </p>
        <p className="text-md">
          꾸러미에 당신만의 노래를 담아보세요.<br />
          곡마다 남기는 메모는 과거의 나에게 보내는 편지처럼,<br />
          언젠가 다시 펼쳐볼 작은 보물이 될 것입니다.
        </p>
      </div>

      {/* 로그인 버튼 */}
      <div className="mt-8">
        <SpotifyLoginButton />
      </div>
    </div>
  );
}
