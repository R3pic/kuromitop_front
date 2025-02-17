import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from '@/components/ui/form.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';
import axiosInstance from '@/api/api.ts';
import {useState} from 'react';
import {useNavigate} from 'react-router';

const formSchema = z.object({
  username: z.string({
    required_error: '아이디는 필수사항입니다.'
  }).min(5, {
    message: '아이디는 최소 5글자 이상이어야 합니다.',
  }),
  password: z.string({
    required_error: '비밀번호는 필수사항입니다.'
  }).min(8, {
    message: '비밀번호는 최소 8글자 이상이어야 합니다.',
  }),
})

type FormSchema = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const navigate = useNavigate();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function onSubmit(value: FormSchema) {
    const res = await axiosInstance.post('/auth/register', value);

    setUsernameErrorMessage('');
    setPasswordErrorMessage('');

    if (res.status === 400) {
      setUsernameErrorMessage('벨리데이션 에러');
      setPasswordErrorMessage('벨리데이션 에러');
      return;
    }

    if (res.status === 409) {
      setUsernameErrorMessage(res.data.message);
      return;
    }

    if (res.status === 201) {
      navigate(0);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-x-8 space-y-2'>
        <FormField
          control={form.control}
          name='username'
          render={(({ field }) => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input placeholder='아이디' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { form.formState.errors.username?.message || usernameErrorMessage }
              </FormDescription>
            </FormItem>
          ))}
        />
        <FormField
          control={form.control}
          name='password'
          render={(({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type='password' placeholder='비밀번호' {...field} />
              </FormControl>
              <FormDescription className='text-red-500'>
                { form.formState.errors.password?.message || passwordErrorMessage }
              </FormDescription>
            </FormItem>
          ))}
        />
        <Button type='submit'>회원가입</Button>
      </form>
    </Form>
  )
}