import Spotify from '@/components/ui/icons/spotify.tsx';
import {Button} from '@/components/ui/button.tsx';

export default function SpotifyLoginButton() {
  async function onClick() {
    window.location.href = 'http://localhost:3000/auth/spotify';
  }

  return (
    <Button onClick={onClick}>
      <Spotify />
      Spotify로 로그인하기
    </Button>
  );
}