import { type SpotifyTrack } from '@/types';
import {Card} from '@/components/ui/card.tsx';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import {useNavigate, useParams} from 'react-router';
import axiosInstance from '@/api/api.ts';

interface Props {
  track: SpotifyTrack;
}

export default function SpotifyTrackListItem({ track }: Props) {
  const params = useParams();
  const navigate = useNavigate();
  async function onClick() {
    const response = await axiosInstance.post(`/bundles/${params.id}/tracks`, track);
    console.log(response.data);
    if (response.status === 200) {
      navigate(0);
    }
  }

  return (
      <Card className='w-full rounded-none flex p-2' onClick={onClick}>
        <Avatar className='rounded-none size-8 mr-2'>
          <AvatarImage className='object-cover aspect-square' src={track.thumbnail} alt={'trackThumbnail'} />
          <AvatarFallback className="rounded-none">TN</AvatarFallback>
        </Avatar>
        <div className='grid flex-1 text-left text-sm leading-tight'>
          <h3 className='truncate font-semibold'>{ track.title }</h3>
          <p className='truncate text-xs'>{ track.artist }</p>
        </div>
      </Card>
  );
}