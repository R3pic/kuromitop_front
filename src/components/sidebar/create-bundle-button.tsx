import {Plus} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';

export default function CreateBundleButton() {
  return (
    <Dialog>
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
        <Input placeholder='꾸러미 이름' />
      </DialogContent>
    </Dialog>
  )
}