import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {Button} from '@/components/ui/button.tsx';
import {Plus} from 'lucide-react';
import SpotifySearchForm from '@/components/track/spotify-search-form.tsx';

export default function NewTrackButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          새 음악 추가 <Plus className='scale-150'/>
        </Button>
      </DialogTrigger>
      <DialogContent className='h-3/4 flex flex-col'>
        <DialogHeader>
          <DialogTitle>새로운 음악 추가</DialogTitle>
          <DialogDescription>꾸러미에 새로운 음악을 추가합니다.</DialogDescription>
        </DialogHeader>
        <SpotifySearchForm />
      </DialogContent>
    </Dialog>
  );
}