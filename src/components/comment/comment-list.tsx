import { Comment } from '@/types';
import CommentCard from '@/components/comment/comment-card.tsx';
import NewCommentInput from '@/components/comment/new-comment-input.tsx';
import {useContext} from 'react';
import {AuthContext} from '@/context/user-context.ts';
import {OwnerContext} from '@/context/owner-context.ts';

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  const authContext = useContext(AuthContext);
  const ownerContext = useContext(OwnerContext);

  const isOwner = () => authContext?.auth?.userId === ownerContext?.ownerId;
  return (
    <>
      <div className='h-full overflow-y-scroll flex flex-col p-4 space-y-4 items-center bg-muted'>
        {isOwner() && <NewCommentInput />}
        {comments.length > 0
          ? comments.map((comment, i) => (
          <CommentCard
            key={i}
            comment={comment}
          />
        )) : (
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            코멘트가 존재하지 않습니다.
          </h4>)}
      </div>
    </>
  );
}