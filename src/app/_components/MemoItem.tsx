import Image from "next/image";
import { MessageCircle } from 'lucide-react';
import styles from './MemoItem.module.css';

interface MemoItemProps {
    thumbnail: string;
    name: string;
    artist: string;
    memoPreview: string;
    memoCount: number;
  }
  
export default function MemoItem({ thumbnail, name, artist, memoPreview, memoCount }: MemoItemProps) {
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