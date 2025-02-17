import { Comment } from '@/types';
import {Card} from '@/components/ui/card.tsx';
import {formatDateString} from '@/lib/string-utils.ts';

interface Props {
  comments: Comment[]
}

export default function CommentList({ comments }: Props) {
  return (
    <div className='h-full overflow-y-scroll flex flex-col p-4 space-y-4 items-center bg-muted'>
      {comments.map((comment) => (
        <Card className='w-1/2 p-2'>
          <p className='mb-2 leading-5 line-clamp-2 '>{ comment.content }</p>
          <p className='text-right text-xs text-muted-foreground'>{ formatDateString(comment.created_at) }</p>
        </Card>
      ))}
    </div>
  );
}