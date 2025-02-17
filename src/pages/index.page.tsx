import TrackList from '@/components/track/track-list.tsx';
import {useEffect, useState} from 'react';
import axiosInstance from '@/api/api.ts';
import {TrackItem} from '@/types';

export default function IndexPage() {
  const [tracks, setTracks] = useState<TrackItem[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await axiosInstance.get('/tracks/recent-comments');

      const data = response.data;

      setTracks(data);
    }
    void fetch();
  }, []);

  return (
    <>
      <div className='w-[48rem]'>
        <h2 className='scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight first:mt-0'>최근 발견된 메모</h2>
        <TrackList tracks={tracks} />
      </div>
    </>
  )
}