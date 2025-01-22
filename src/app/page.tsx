import Image from "next/image";
import { MessageCircle } from 'lucide-react';
import styles from "./styles.module.css";

export default function Home() {
  const memoList: MemoItemProps[] = [
    {
      thumbnail: '/profile.webp',
      name: "노래제목이 아주아주아주아주 길어진다면 어떻게 될까요",
      artist: "가수이름1",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;; ",
      memoCount: 5,
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목2",
      artist: "가수이름2",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목3",
      artist: "가수이름3",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;".repeat(5),
      memoCount: 1,
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목4",
      artist: "가수이름4",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목5",
      artist: "가수이름5",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.content_grid}>
        <section className={styles.recentMemoSection}>
          <h1 className={styles.recentMemoTitle}>최근 발견된 메모들</h1>
          <div className={styles.memoList}>
            {memoList.map(({thumbnail, name, artist, memoPreview, memoCount}, i) => 
            <MemoItem key={i}
            thumbnail={thumbnail}
            name={name}
            artist={artist}
            memoPreview={memoPreview}
            memoCount={memoCount}
            />)}
          </div>
        </section>
      </div>
    </div>
  );
}

interface MemoItemProps {
  thumbnail: string;
  name: string;
  artist: string;
  memoPreview: string;
  memoCount: number;
}

function MemoItem({ thumbnail, name, artist, memoPreview, memoCount }: MemoItemProps) {
  return (
    <div className={styles.memoItem}>
        <Image className={styles.thumbnail_icon} src={thumbnail} alt={name} width={64} height={64} />
        <div className={styles.musicInfo}>
          <h3 className={styles.musicName}>{ name }</h3>
          <p className={styles.musicArtist}>{ artist }</p>
        </div>
        <div className={styles.memoInfo}>
          <p className={styles.memoPreview}>{ memoPreview }</p>
          <div className={styles.memoCount}>
            <MessageCircle size={18}/>
            <span className={styles.memoCountText}>{ memoCount }</span>
          </div>
        </div>
    </div>
  );
}