import {Plus} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {Button} from '@/components/ui/button.tsx';
import CreateBundleForm from '@/components/bundle/create-bundle-form.tsx';
import {useState} from 'react';

export default function CreateBundleButton() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="animate-none data-[state=open]:slide-in-from-top-1/2">
        <DialogHeader>
          <DialogTitle>꾸러미 만들기</DialogTitle>
          <DialogDescription>새로운 꾸러미를 만듭니다.</DialogDescription>
        </DialogHeader>
        <CreateBundleForm
          callback={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}