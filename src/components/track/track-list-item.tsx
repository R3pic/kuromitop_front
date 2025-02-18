import { TrackItem } from '@/types';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import {Card} from '@/components/ui/card.tsx';
import {Ellipsis, MessageCircle} from 'lucide-react';
import {NavLink, useNavigate} from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import axiosInstance from '@/api/api.ts';

interface Props {
  track: TrackItem
}

export default function TrackListItem({ track }: Props) {
  const navigate = useNavigate();
  async function onDeleteClick() {
    const response = await axiosInstance.delete(`/tracks/${track.id}`);

    if (response.status === 204) {
      navigate(0);
    }
  }

  return (
      <Card className='w-full rounded-none flex items-center p-2'>
        <NavLink className='w-full flex' to={`/track/${track.id}`}>
          <Avatar className='rounded-none size-14 mr-2'>
            <AvatarImage className='object-cover aspect-square' src={track.thumbnail} alt={'trackThumbnail'} />
            <AvatarFallback className="rounded-none">TN</AvatarFallback>
          </Avatar>
          <div className='grid flex-1 text-left text-lg leading-tight'>
            <h3 className='truncate font-semibold'>{ track.title }</h3>
            <p className='truncate text-sm'>{ track.artist }</p>
          </div>
          {track.recent_comment &&
              <Card className='w-auto p-4 mr-2 flex justify-between items-center'>
                <p className='w-72 overflow-hidden text-ellipsis text-nowrap'>{ track.recent_comment.content }</p>
                <div className='flex items-center space-x-2'>
                    <MessageCircle size={16}/>
                    <span>{ track.recent_comment.comment_count }</span>
                </div>
              </Card>
          }
        </NavLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onDeleteClick}>
              음악 삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
  );
}