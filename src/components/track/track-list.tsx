import TrackItem from '@/components/track/track-item.tsx';
import {Track} from '@/types';

interface Props {
  tracks: Track[]
}

export default function TrackList({ tracks }: Props) {
  return (
    <div className='flex flex-col space-y-2'>
      {tracks.map((track, i) => (
        <TrackItem key={i} track={track} />
      ))}
    </div>
  )
}