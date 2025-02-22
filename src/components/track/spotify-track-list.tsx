import { SpotifyTrack } from '@/types';
import SpotifyTrackListItem from '@/components/track/spotify-track-list-item.tsx';

interface Props {
  tracks: SpotifyTrack[];
}

export default function SpotifyTrackList({ tracks }: Props) {
  return (
    <div className='flex-1 h-[30rem] overflow-y-scroll flex flex-col p-4 space-y-1 items-center bg-muted'>
      {tracks.length > 0 ? tracks.map((track, i) => (
        <SpotifyTrackListItem key={i} track={track} />
      )) : (
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
          검색 목록이 없습니다.
        </h4>
      )}
    </div>
  );
}