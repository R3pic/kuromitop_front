import {Label} from '@/components/ui/label.tsx';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>무언가 잘못된 것 같아요..</h1>
      <Label>다시 시도해주세요.</Label>
    </div>
  )
}