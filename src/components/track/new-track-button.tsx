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
import NewTrackForm from '@/components/track/new-track-form.tsx';
import {useState} from 'react';

export default function NewTrackButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          새 음악 추가 <Plus className='scale-150'/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새로운 음악 추가</DialogTitle>
          <DialogDescription>꾸러미에 새로운 음악을 추가합니다.</DialogDescription>
        </DialogHeader>
        <NewTrackForm
          callback={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}