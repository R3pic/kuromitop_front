import MemoItem from '@/app/_components/MemoItem';
import styles from './styles.module.css';
import NewMusicButton from './_components/NewMusicButton';

export default function bundlePage() {
    const data = {
        name: "꾸러미 이름1"

    }

    let musicList = [
        {
            thumbnail: '/profile.webp',
            name: "노래제목이 아주아주아주아주 길어진다면 어떻게 될까요",
            artist: "가수이름1",
            memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;; ",
            memoCount: 5,
        },
        {
            thumbnail: '/profile.webp',
            name: "노래제목이 아주아주아주아주 길어진다면 어떻게 될까요",
            artist: "가수이름1",
            memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;; ",
            memoCount: 5,
        },
        {
            thumbnail: '/profile.webp',
            name: "노래제목이 아주아주아주아주 길어진다면 어떻게 될까요",
            artist: "가수이름1",
            memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;; ",
            memoCount: 5,
        },
    ];

    musicList = musicList.concat(musicList).concat(musicList).concat(musicList);

    return (
        <div className={styles.page}>
            <div className={styles.bundleHeader}>
                <h1 className={styles.bundleTitle}>{ data.name }</h1>
                <NewMusicButton />
            </div>
            <div className={styles.musicList}>
                {musicList.map(({ thumbnail, name, artist, memoPreview, memoCount}, i) => 
                <MemoItem key={i}
                    thumbnail={thumbnail}
                    name={name}
                    artist={artist}
                    memoPreview={memoPreview}
                    memoCount={memoCount}
                />)}
            </div>
        </div>
    );
}