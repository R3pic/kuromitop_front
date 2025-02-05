import Link from 'next/link';
import styles from './Header.module.css';
import { Package } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
    nickname: string;
    id: string;
}

export default function Header({ nickname, id }: HeaderProps) {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.brand}>
                <Package className={styles.icon} size='2rem'/>
                <span className={styles.siteName}>꾸러미탑</span>
            </Link>

            <div className={styles.toolBar}>
                <div className={styles.profile}>
                    <Image className={styles.profileIcon} src={'/profile.webp'} width={50} height={50} alt={'profile icon'}/>
                    <Link className={styles.userName} href={`/user/${id}`}>{ nickname }</Link>
                </div>
            </div>
        </header>
    );
}