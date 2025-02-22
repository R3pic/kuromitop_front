import {Comment} from '@/types';
import {formatDateString} from '@/lib/string-utils.ts';
import {Card} from '@/components/ui/card.tsx';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog.tsx';
import {Button} from '@/components/ui/button.tsx';
import {X} from 'lucide-react';
import axiosInstance from '@/api/api.ts';
import {useNavigate} from 'react-router';
import {useContext} from 'react';
import {AuthContext} from '@/context/user-context.ts';
import {OwnerContext} from '@/context/owner-context.ts';

interface Props {
  comment: Comment;
}

export default function CommentCard({ comment }: Props) {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const ownerContext = useContext(OwnerContext);

  const isOwner = () => authContext?.auth?.userId === ownerContext?.ownerId;
  async function deleteCommentClick() {
    const response = await axiosInstance.delete(`/comments/${comment.id}`);

    if (response.status === 204) {
      navigate(0);
    }
  }

  return (
    <Card className='relative w-1/2 p-2'>
      {isOwner() && <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className='absolute right-1 top-1' variant='ghost' size='xs' >
            <X />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              메모를 삭제하면 다시 되돌릴 수 없습니다. 괜찮다면 확인을 눌러주세요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={deleteCommentClick}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>}
      <p className='mb-2 leading-5 line-clamp-2 '>{ comment.content }</p>
      <p className='text-right text-xs text-muted-foreground'>{ formatDateString(comment.created_at) }</p>
    </Card>
  );
}