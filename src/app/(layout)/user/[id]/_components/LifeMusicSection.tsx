import styles from './LifeMusicSection.module.css';
import Image from 'next/image';

interface Music {
    thumbnail: string;
    title: string;
    artist: string;
}

interface Props {
    musicList: Music[];
}

export default function LifeMusicSection({ musicList }: Props) {
    return (
    <div className={styles.lifeMusicSection}>
        <h2 className={styles.lifeMusicTitle}>인생 음악</h2>
        <ul className={styles.musicList}>
            {musicList.map(({ thumbnail, title, artist }, index) => (
                <li key={index} className={styles.musicItem} data-index={index + 1}>
                    <Image src={thumbnail} alt={title} className={styles.musicThumbnail} width={50} height={50}/>
                    <div>
                        <h3 className={styles.musicTitle}>{title}</h3>
                        <p className={styles.musicArtist}>{artist}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
}