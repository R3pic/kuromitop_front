import styles from "./styles.module.css";
import TrackItem from "./_components/MemoItem";
import { fetchRecentTracks } from "@/api/service/recent";

export default async function Home() {
  const trackList = await fetchRecentTracks();

  return (
    <div className={styles.page}>
      <div className={styles.content_grid}>
        <section className={styles.recentMemoSection}>
          <h1 className={styles.recentMemoTitle}>최근 발견된 메모들</h1>
          <div className={styles.memoList}>
            {trackList.map(({ id, title, artist, thumbnail, comment_count, recent_comment }, i) => 
            <TrackItem key={i}
              thumbnail={thumbnail}
              title={title}
              artist={artist}
              comment_preview={recent_comment.content}
              comment_count={comment_count}
              href={`/track/${id}`}
            />)}
          </div>
        </section>
      </div>
    </div>
  );
}