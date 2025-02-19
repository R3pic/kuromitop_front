import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {Pencil} from 'lucide-react';
import {useState} from 'react';
import UpdateBundleForm from '@/components/bundle/update-bundle-form.tsx';
import {DropdownMenuItem} from '@/components/ui/dropdown-menu.tsx';

interface Props {
  bundle: {
    id: string;
    title: string;
    is_private: boolean;
  }
}

export default function UpdateBundleDropdownItem({ bundle }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Pencil className="text-muted-foreground" />
          <span>꾸러미 정보 수정</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="animate-none data-[state=open]:slide-in-from-top-1/2">
        <DialogHeader>
          <DialogTitle>꾸러미 만들기</DialogTitle>
          <DialogDescription>새로운 꾸러미를 만듭니다.</DialogDescription>
        </DialogHeader>
        <UpdateBundleForm
          bundle={bundle}
          callback={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}