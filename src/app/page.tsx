import styles from "./styles.module.css";
import MemoItem from "./_components/MemoItem";

export default function Home() {
  const memoList = [
    {
      thumbnail: '/profile.webp',
      name: "노래제목이 아주아주아주아주 길어진다면 어떻게 될까요",
      artist: "가수이름1",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;; ",
      memoCount: 5,
      href: 'music/zxcv?user=유저아이디',
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목2",
      artist: "가수이름2",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
      href: 'music/zxcv?user=유저아이디',
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목3",
      artist: "가수이름3",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;".repeat(5),
      memoCount: 1,
      href: 'music/zxcv?user=유저아이디2',
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목4",
      artist: "가수이름4",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
      href: 'music/zxcv?user=유저아이디3',
    },
    {
      thumbnail: '/profile.webp',
      name: "노래제목5",
      artist: "가수이름5",
      memoPreview: "최근들어 무한 반복하고 있는 노래 개좋음 ;;",
      memoCount: 1,
      href: 'music/zxcv?user=유저아이디',
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.content_grid}>
        <section className={styles.recentMemoSection}>
          <h1 className={styles.recentMemoTitle}>최근 발견된 메모들</h1>
          <div className={styles.memoList}>
            {memoList.map(({thumbnail, name, artist, memoPreview, memoCount, href}, i) => 
            <MemoItem key={i}
              thumbnail={thumbnail}
              name={name}
              artist={artist}
              memoPreview={memoPreview}
              memoCount={memoCount}
              href={href}
            />)}
          </div>
        </section>
      </div>
    </div>
  );
}