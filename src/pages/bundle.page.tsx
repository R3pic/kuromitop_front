import {useEffect, useRef, useState} from 'react';
import {TrackItem} from '@/types';
import axiosInstance from '@/api/api.ts';
import {useParams} from 'react-router';
import TrackList from '@/components/track/track-list.tsx';
import NewTrackButton from '@/components/track/new-track-button.tsx';
import {Separator} from '@/components/ui/separator.tsx';

export default function BundlePage() {
  const title = useRef<string>('');
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const response = await axiosInstance.get(`/bundles/${params.id}/tracks`);

      if (response.status === 403)
        setIsPrivate(true);
      else {
        const data = response.data;
        title.current = data.title;
        setTracks(data.tracks);
        setIsPrivate(false);
      }
    }

    void fetch();
  }, [params.id]);
  return (
    <div className='w-full h-full p-4'>
      <div className='mb-4 flex items-center'>
        <h1 className='mr-auto scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          { isPrivate ? '비공개 꾸러미' : title.current }
        </h1>
        <NewTrackButton />
      </div>
      <Separator className='mb-2'/>
      <div className='flex-1 h-[42rem] max-h-[36rem] overflow-y-scroll'>
        {isPrivate ?
          <h3 className='font-semibold'>비공개 꾸러미입니다.</h3> :
          <TrackList tracks={tracks} />}
      </div>
    </div>
  )
}