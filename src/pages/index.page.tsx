import {useEffect, useState} from 'react';
import axiosInstance from '@/api/api.ts';
import {TrackItem} from '@/types';
import RecentTrackList from '@/components/track/recent-track-list.tsx';

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
      <div className='w-full p-4 h-[46rem]'>
        <h2 className='scroll-m-20 border-b pb-2 mb-4 text-3xl font-semibold tracking-tight first:mt-0'>최근 발견된 메모</h2>
        <RecentTrackList tracks={tracks} />
      </div>
    </>
  )
}