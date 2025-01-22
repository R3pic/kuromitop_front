import Image from 'next/image';
import styles from './styles.module.css';
import React from 'react';

export default function MusicPage() {
    const musicData = {
        thumbnail: '/profile.webp',
        name: '노래 제목1',
        artist: '가수 이름1',
    }

    const memoData = [
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
        { date: new Date().toDateString(), memo: '노래 듣자마자 플리에 넣음' },
    ];

    return (
        <div className={styles.page}>
                <div className={styles.musicSection}>
                    <Image className={styles.thumbnail} src={'/profile.webp'} width={256} height={256} alt='album cover'/>
                    <div className={styles.musicInfo}>
                        <h1 className={styles.musicName}>{ musicData.name }</h1>
                        <p className={styles.artist}>{ musicData.artist }</p>
                    </div>
                </div>

                <div className={styles.memoSection}>
                    <div className={styles.memoList}>
                        {memoData.map(({ date, memo }, i) =>
                            <MemoItem
                                key={i}
                                date={date}
                                memo={memo}
                            />
                        )}
                    </div>
                </div>
        </div>
    );
}

interface Props {
    date: string;
    memo: string;
}

function MemoItem({ date, memo }: Props) {
    return (
        <div className={styles.memoItem}>
            <p className={styles.memo}>{ memo }</p>
            <span className={styles.dateText}>{ date }</span>
        </div>
    );
}