import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { Package } from 'lucide-react';

export default function userPage() {
    const data = {
        name: "유저이름",
        profile: "/profile.webp",
        description: "유저 설명",
        topMusicList: [
            {
                thumbnail: '/썸네일주소',
                title: '노래 제목1',
                artist: '가수 이름1',
                href: 'user/userid'
            },
            {
                thumbnail: '/썸네일주소',
                title: '노래 제목2',
                artist: '가수 이름2',
                href: 'user/userid'
            },
            {
                thumbnail: '/썸네일주소',
                title: '노래 제목3',
                artist: '가수 이름3',
                href: 'user/userid'
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
            <div className={styles.profile_section}>
                <div className={styles.profile}>
                    <Image src={data.profile} alt={`${data.name}의 프로필`} className={styles.profileImage} width={120} height={120} />
                    <h1 className={styles.userName}>{data.name}</h1>
                    <p className={styles.description}>{data.description}</p>
                </div>
                <div className={styles.lifeMusic}>
                    <h2 className={styles.sectionTitle}>인생 음악</h2>
                    <ul className={styles.musicList}>
                        {data.topMusicList.map((music, index) => (
                            <li key={index} className={styles.musicItem}>
                                <Image src={music.thumbnail} alt={music.title} className={styles.musicThumbnail} width={50} height={50}/>
                                <div>
                                    <h3 className={styles.musicTitle}>{music.title}</h3>
                                    <p className={styles.musicArtist}>{music.artist}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.bundle_section}>
                <h2 className={styles.sectionTitle}>음악 꾸러미</h2>
                <div className={styles.bundle_grid}>
                    {data.bundleList.map((bundle, index) => (
                        <Link key={index} className={styles.bundleItem} href={bundle.href}>
                            <Package className={styles.bundle_icon} size={32}/>
                            <span className={styles.bundle_name}>{ bundle.name }</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
