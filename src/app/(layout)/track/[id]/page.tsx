import Image from 'next/image';
import styles from './styles.module.css';
import React from 'react';
import { fetchTrackDetail } from '@/app/api/service/tracks';
import { PageProps } from '@/common/page-props';
import { formatDateString } from '@/utils/string';

export default async function MusicPage({ params }: PageProps<{ id: string }>) {
    const { id } = await params;

    const data = await fetchTrackDetail(id);
    console.log(data);

    return (
        <div className={styles.page}>
                <div className={styles.musicSection}>
                    <Image className={styles.thumbnail} src={data.thumbnail} width={256} height={256} alt='album cover'/>
                    <div className={styles.musicInfo}>
                        <h1 className={styles.musicName}>{ data.title }</h1>
                        <p className={styles.artist}>{ data.artist }</p>
                    </div>
                </div>

                <div className={styles.memoSection}>
                    <div className={styles.memoList}>
                        {data.comments.map(({ content, created_at }, i) =>
                            <MemoItem
                                key={i}
                                date={created_at}
                                memo={content}
                            />
                        )}
                    </div>
                </div>
        </div>
    );
}

interface Props {
    date: Date;
    memo: string;
}

function MemoItem({ date, memo }: Props) {
    return (
        <div className={styles.memoItem}>
            <p className={styles.memo}>{ memo }</p>
            <span className={styles.dateText}>{ formatDateString(date) }</span>
        </div>
    );
}