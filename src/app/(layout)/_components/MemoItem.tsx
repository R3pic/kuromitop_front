import Image from "next/image";
import { MessageCircle } from 'lucide-react';
import styles from './MemoItem.module.css';
import Link from "next/link";

interface MemoItemProps {
    thumbnail: string;
    title: string;
    artist: string;
    comment_preview: string;
    comment_count: number;
    href: string;
  }
  
export default function TrackItem({ thumbnail, title, artist, comment_preview, comment_count, href }: MemoItemProps) {
    return (
      <Link className={styles.memoItem} href={href}>
          <Image className={styles.thumbnail_icon} src={thumbnail} alt={title} width={64} height={64} />
          <div className={styles.musicInfo}>
            <h3 className={styles.musicName}>{ title }</h3>
            <p className={styles.musicArtist}>{ artist }</p>
          </div>
          <div className={styles.memoInfo}>
            <p className={styles.memoPreview}>{ comment_preview }</p>
            <div className={styles.memoCount}>
              <MessageCircle size={18}/>
              <span className={styles.memoCountText}>{ comment_count }</span>
            </div>
          </div>
      </Link>
    );
  }