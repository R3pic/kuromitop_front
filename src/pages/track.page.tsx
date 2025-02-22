import {useContext, useEffect, useState} from 'react';
import {Comment, Track} from '@/types';
import axiosInstance from '@/api/api.ts';
import {useParams} from 'react-router';
import {Separator} from '@/components/ui/separator.tsx';
import CommentList from '@/components/comment/comment-list.tsx';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import {OwnerContext} from '@/context/owner-context.ts';

export default function TrackPage() {
  const ownerContext = useContext(OwnerContext);
  const params = useParams();
  const [track, setTrack] = useState<Track | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await axiosInstance.get(`/tracks/${params.id}/comments`);

      const data = response.data;

      setTrack(data.track);
      setComments(data.comments);
      ownerContext?.setOwnerId(data.track.owner);
    }

    void fetch();
  }, [ownerContext, params.id]);

  return (
    <div className='flex flex-col w-full h-full p-4'>
      <div className='flex flex-col mb-4 space-y-2'>
        <div className='flex'>
          <Avatar className='rounded-none size-32 mr-2'>
            <AvatarImage className='object-cover aspect-square' src={track?.thumbnail} alt={'trackThumbnail'} />
            <AvatarFallback className="rounded-none">TN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col justify-between'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              { track?.title }
            </h1>
            <p className='text-md'>{ track?.artist }</p>
          </div>
        </div>
        <Separator />
      </div>
      <div className='flex-1 h-[36rem] max-h-[36rem] rounded-4xl overflow-y-scroll'>
        <CommentList
          comments={comments}
        />
      </div>
    </div>
  );
}