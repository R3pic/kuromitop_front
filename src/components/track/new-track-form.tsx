import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form.tsx';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';
import axiosInstance from '@/api/api.ts';
import {useParams} from 'react-router';

interface Props {
  callback?: () => void;
}

const formSchema = z.object({
  title: z.string().min(1, '음악 제목은 1글자 이상이어야합니다.'),
  artist: z.string().min(1, '아티스트는 1글자 이상이어야합니다.'),
  thumbnail: z.string().min(10, '섬네일 주소는 10글자 이상이어야합니다.'),
});

type FormSchema = z.infer<typeof formSchema>;

export default function NewTrackForm({ callback }: Props) {
  const params = useParams();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      artist: '',
      thumbnail: '',
    }
  });

  async function onSubmit(value: FormSchema) {
    async function fetch() {
      const response = await axiosInstance.post(`/bundles/${params.id}/tracks`, value);

      if (response.status === 200) {
        if (callback) {
          callback();
        }
      }
    }

    void fetch();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>음악 이름</FormLabel>
              <FormControl>
                <Input placeholder='음악 이름' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { form.formState.errors.title?.message }
              </FormDescription>
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name='artist'
          render={({ field }) => (
            <FormItem>
              <FormLabel>아티스트 이름</FormLabel>
              <FormControl>
                <Input placeholder='아티스트 이름' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { form.formState.errors.artist?.message }
              </FormDescription>
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name='thumbnail'
          render={({ field }) => (
            <FormItem>
              <FormLabel>섬네일</FormLabel>
              <FormControl>
                <Input placeholder='섬네일 주소' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { form.formState.errors.thumbnail?.message }
              </FormDescription>
            </FormItem>)}
        />
        <Button type='submit' className='mt-4'>추가</Button>
      </form>
    </Form>
  );
}