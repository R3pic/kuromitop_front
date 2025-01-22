import styles from './styles.module.css';
import BundleSection from './_components/BundleSection';
import LifeMusicSection from './_components/LifeMusicSection';
import Profile from './_components/Profile';

export default function userPage() {
    const data = {
        name: "유저이름",
        profile: "/profile.webp",
        description: "유저 설명",
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
        bundleList: [
            { name: '꾸러미 이름1', href: '꾸러미/경로1' },
            { name: '꾸러미 이름2', href: '꾸러미/경로2' },
            { name: '꾸러미 이름3', href: '꾸러미/경로3' },
            { name: '꾸러미 이름4', href: '꾸러미/경로4' },
            { name: '꾸러미 이름5', href: '꾸러미/경로5' },
            { name: '꾸러미 이름6', href: '꾸러미/경로6' },
        ]
    };

    return (
        <div className={styles.page}>
            <div className={styles.section}>
                <Profile
                    profile={data.profile}
                    name={data.name}
                    description={data.description}
                />
                <LifeMusicSection musicList={data.topMusicList}/>
            </div>
            <BundleSection bundleList={data.bundleList}/>
        </div>
    );
}
