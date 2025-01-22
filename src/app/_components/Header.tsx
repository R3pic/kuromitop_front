import Link from 'next/link';
import style from './Header.module.css';
import { Package } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
    const username = '유저이름';

    return (
        <header className={style.header}>
            <Link href={'/'} className={style.brand}>
                <Package className={style.icon} size='2rem'/>
                <span className={style.siteName}>꾸러미탑</span>
            </Link>

            <div className={style.toolBar}>
                <div className={style.profile}>
                    <Image className={style.profileIcon} src={'/profile.webp'} width={50} height={50} alt={'profile icon'}/>
                    <span className={style.userName}>{ username }</span>
                </div>
            </div>
        </header>
    );
}