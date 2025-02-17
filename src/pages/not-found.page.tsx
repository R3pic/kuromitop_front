import {Label} from '@/components/ui/label.tsx';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>404 Not Found</h1>
      <Label>페이지가 존재하지 않습니다.</Label>
    </div>
  )
}