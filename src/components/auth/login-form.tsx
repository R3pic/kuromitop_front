import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';
import {useNavigate} from 'react-router';
import axiosInstance from '@/api/api.ts';
import {useState} from 'react';

const formSchema = z.object({
  username: z.string({
    required_error: '아이디는 필수사항입니다.'
  }).min(5),
  password: z.string({
    required_error: '비밀번호는 필수사항입니다.'
  }).min(8),
})

type FormSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const isValidationError = () =>
    form.formState.errors.username?.message
    || form.formState.errors.password?.message;

  async function onSubmit(value: FormSchema) {
    const res = await axiosInstance.post('/auth/login', value);

    if (res.status === 400 || res.status === 401) {
      setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
      return;
    }
    navigate('/home');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-x-8 space-y-2'>
        <FormField
          control={form.control}
          name='username'
          render={(({field}) => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input placeholder='아이디' {...field} />
              </FormControl>
            </FormItem>
          ))}
        />
        <FormField
          control={form.control}
          name='password'
          render={(({field}) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type='password' placeholder='비밀번호' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { isValidationError() && '아이디또는 비밀번호가 잘못되었습니다.' || errorMessage }
              </FormDescription>
            </FormItem>
          ))}
        />
        <Button type='submit'>로그인</Button>
      </form>
    </Form>
  )
}