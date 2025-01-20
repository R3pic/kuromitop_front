import Link from 'next/link';
import style from './Header.module.css';
import { Package } from 'lucide-react';

export default function Header() {
    return (
        <header className={style.header}>
            <Link href={'/'} className={style.brand}>
                <Package className={style.icon} size='2rem'/>
                <span className={style['site-name']}>꾸러미탑</span>
            </Link>
        </header>
    );
}