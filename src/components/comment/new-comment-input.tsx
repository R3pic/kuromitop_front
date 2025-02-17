import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import {Form, FormControl, FormDescription, FormField, FormItem} from '@/components/ui/form.tsx';
import axiosInstance from '@/api/api.ts';
import {useNavigate, useParams} from 'react-router';

const MAX_LEN = 250;
const formSchema = z.object({
  content: z.string()
    .min(5, "최소 5자 이상 입력해주세요.")
    .max(MAX_LEN, "최대 250자까지만 입력 가능합니다."),
});

type FormSchema = z.infer<typeof formSchema>;

export default function NewCommentInput() {
  const params = useParams();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      content: '',
    }
  });

  async function onSubmit(value: FormSchema) {
    console.log("입력한 텍스트:", value.content);
    const response = await axiosInstance.post(`/tracks/${params.id}/comments`, value);

    if (response.status === 200) {
      navigate(0);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/2 flex space-x-2">
        <div className="flex-1">
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    { ...field }
                    className="mb-2"
                    placeholder="새로운 감상..."
                  />
                </FormControl>
                <FormDescription>
                  { form.formState.errors.content?.message }
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={!form.formState.isValid}>
          <Send />
        </Button>
      </form>
    </Form>
  );
}
