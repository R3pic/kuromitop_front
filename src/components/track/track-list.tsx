import TrackListItem from '@/components/track/track-list-item.tsx';
import { TrackItem } from '@/types';

interface Props {
  tracks: TrackItem[]
}

export default function TrackList({ tracks }: Props) {
  return (
    <div className='h-full overflow-y-scroll flex flex-col p-4 space-y-1 items-center bg-muted'>
      {tracks.length > 0 ? tracks.map((track, i) => (
        <TrackListItem key={i} track={track} />
      )) : (
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
          트랙이 존재하지 않습니다.
        </h4>
      )}
    </div>
  )
}