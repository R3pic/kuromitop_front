import styles from './styles.module.css';
import BundleSection from './_components/BundleSection';
import LifeMusicSection from './_components/LifeMusicSection';
import Profile from './_components/Profile';
import { PageProps } from '@/common/page-props';
import { fetchProfile } from '@/api/service/profile';

export default async function userPage({ params }: PageProps<{ id: string }>) {
    const { id } = await params;

    const profile = await fetchProfile(id);

    const data = {
        ...profile,
        topMusicList: [
            {
                thumbnail: '/profile.webp',
                title: '노래 제목1',
                artist: '가수 이름1',
            },
            {
                thumbnail: '/profile.webp',
                title: '노래 제목2',
                artist: '가수 이름2',
            },
            {
                thumbnail: '/profile.webp',
                title: '노래 제목3',
                artist: '가수 이름3',
            },
        ],
    }

    console.log(data);

    return (
        <div className={styles.page}>
            <div className={styles.section}>
                <Profile
                    profile={data.thumbnail}
                    name={data.nickname ?? id}
                    description={data.introduction ?? '소개글이 없습니다.'}
                />
                <LifeMusicSection musicList={data.topMusicList}/>
            </div>
            <BundleSection bundleList={data.bundleList}/>
        </div>
    );
}
