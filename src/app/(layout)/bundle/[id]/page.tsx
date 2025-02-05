import TrackItem from '@/app/(layout)/_components/MemoItem';
import styles from './styles.module.css';
import NewMusicButton from './_components/NewMusicButton';
import { PageProps } from '@/common/page-props';
import { fetchBundledetail } from '@/app/api/service/bundle-detail';
import { UUID } from 'crypto';

export default async function bundlePage({ params }: PageProps<{ id: UUID }>) {
    const { id } = await params;

    const data = await fetchBundledetail(id);

    return (
        <div className={styles.page}>
            <div className={styles.bundleHeader}>
                <h1 className={styles.bundleTitle}>{ data.title }</h1>
                <NewMusicButton />
            </div>
            <div className={styles.musicList}>
                {data.tracks.map(({ id, title, artist, thumbnail, comment_count, recent_comment}, i) => 
                <TrackItem key={i}
                    thumbnail={thumbnail}
                    title={title}
                    artist={artist}
                    comment_preview={recent_comment.content}
                    comment_count={comment_count}
                    href={`/track/${id}`}
                />)}
            </div>
        </div>
    );
}