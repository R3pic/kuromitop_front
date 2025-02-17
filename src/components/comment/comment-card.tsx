import {Comment} from '@/types';
import {formatDateString} from '@/lib/string-utils.ts';
import {Card} from '@/components/ui/card.tsx';

interface Props {
  comment: Comment;
}

export default function CommentCard({ comment }: Props) {
  return (
    <Card className='w-1/2 p-2'>
      <p className='mb-2 leading-5 line-clamp-2 '>{ comment.content }</p>
      <p className='text-right text-xs text-muted-foreground'>{ formatDateString(comment.created_at) }</p>
    </Card>
  );
}