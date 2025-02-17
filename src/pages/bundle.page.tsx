import {useEffect, useRef, useState} from 'react';
import {Track} from '@/types';
import axiosInstance from '@/api/api.ts';
import {useParams} from 'react-router';
import TrackList from '@/components/track/track-list.tsx';
import {Separator} from '@/components/ui/separator.tsx';

export default function BundlePage() {
  const title = useRef<string>('');
  const [tracks, setTracks] = useState<Track[]>([]);
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const response = await axiosInstance.get(`/bundles/${params.id}/tracks`);

      const data = response.data;
      console.log(data);
      title.current = data.title;
      setTracks([...data.tracks]);
    }

    void fetch();
  }, [params.id]);
  return (
    <div className='w-full h-full p-4'>
      <div className='flex flex-col mb-4 space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          { title.current }
        </h1>
          <Separator />
      </div>

      <TrackList tracks={tracks} />
    </div>
  )
}