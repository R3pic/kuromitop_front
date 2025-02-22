import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem} from '@/components/ui/form.tsx';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';
import axiosInstance from '@/api/api.ts';
import {useState} from 'react';
import {SpotifyTrack} from '@/types';
import SpotifyTrackList from '@/components/track/spotify-track-list.tsx';

const formSchema = z.object({
  title: z.string().min(1, '검색어는 1글자 이상이어야합니다.'),
});

type FormSchema = z.infer<typeof formSchema>;

export default function SpotifySearchForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    }
  });

  const [spotifyTracks, setSpotifyTracks] = useState<SpotifyTrack[]>([]);

  async function onSubmit(value: FormSchema) {
    async function fetch() {
      const searchQuery = new URLSearchParams();
      searchQuery.append('q', value.title);

      console.log(searchQuery.toString());
      const response = await axiosInstance.get(`/tracks/search?${searchQuery.toString()}`);

      if (response.status === 200) {
        const data = response.data;
        const { tracks } = data;
        setSpotifyTracks(tracks);
      }
    }

    void fetch();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='w-full flex items-center mb-2'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='검색할 음악 이름' {...field} />
                </FormControl>
              </FormItem>
            )} />
          <Button className='sr-only' type='submit' />
        </div>
        <SpotifyTrackList
          tracks={spotifyTracks}
        />
      </form>
    </Form>
  );
}