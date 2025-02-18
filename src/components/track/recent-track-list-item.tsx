import { TrackItem } from '@/types';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import {Card} from '@/components/ui/card.tsx';
import {MessageCircle} from 'lucide-react';
import {NavLink} from 'react-router';

interface Props {
  track: TrackItem
}

export default function RecentTrackListItem({ track }: Props) {
  return (
    <NavLink className='w-full' to={`/track/${track.id}`}>
      <Card className='rounded-none flex p-2'>
        <Avatar className='rounded-none size-14 mr-2'>
          <AvatarImage className='object-cover aspect-square' src={track.thumbnail} alt={'trackThumbnail'} />
          <AvatarFallback className="rounded-none">TN</AvatarFallback>
        </Avatar>
        <div className='grid flex-1 text-left text-lg leading-tight'>
          <h3 className='truncate font-semibold'>{ track.title }</h3>
          <p className='truncate text-sm'>{ track.artist }</p>
        </div>
        {track.recent_comment &&
            <Card className='w-auto px-4 flex justify-between items-center'>
              <p className='w-72 overflow-hidden text-ellipsis text-nowrap'>{ track.recent_comment.content }</p>
              <div className='flex items-center space-x-2'>
                  <MessageCircle size={16}/>
                  <span>{ track.recent_comment.comment_count }</span>
              </div>
            </Card>
        }
      </Card>
    </NavLink>
  );
}