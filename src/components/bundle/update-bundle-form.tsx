import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';
import axiosInstance from '@/api/api.ts';
import {useState} from 'react';
import {Switch} from '@/components/ui/switch.tsx';
import {useNavigate} from 'react-router';

interface Props {
  bundle: {
    id: string;
    title: string;
    is_private: boolean;
  }
  callback?: () => void
}

const formSchema = z.object({
  title: z.string()
    .min(3, { message: '꾸러미 이름은 3글자 이상이어야 합니다.' })
    .max(20, { message: '꾸러미 이름은 20글자 이하여야 합니다.'}),
  is_private: z.boolean().default(false).optional(),
})

type FormSchema = z.infer<typeof formSchema>;

export default function UpdateBundleForm({ bundle, callback }: Props) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: bundle.title,
      is_private: bundle.is_private,
    },
  })

  async function onSubmit(value: FormSchema) {
    const res = await axiosInstance.patch(`/bundles/${bundle.id}`, value);

    if (res.status === 400) {
      setErrorMessage(res.data.message);
      return;
    }

    if (callback) {
      callback();
    }

    if (res.status === 200) {
      navigate(0);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-x-8 space-y-4'>
        <FormField
          control={form.control}
          name='title'
          render={(({field}) => (
            <FormItem>
              <FormLabel>꾸러미 이름</FormLabel>
              <FormControl>
                <Input placeholder='꾸러미 이름' {...field} />
              </FormControl>
              <FormDescription>
                { form.formState.errors.title?.message || errorMessage }
              </FormDescription>
            </FormItem>
          ))}
        />
        <FormField
          control={form.control}
          name='is_private'
          render={(({field}) => (
            <FormItem className='flex items-center space-x-2'>
              <FormLabel>비공개</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          ))}
        />
        <Button type='submit'>확인</Button>
      </form>
    </Form>
  )
}