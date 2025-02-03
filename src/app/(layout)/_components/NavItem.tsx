import { Package } from "lucide-react";
import Link from "next/link";
import style from './NavItem.module.css';

interface NavItemProps {
    href: string;
    name: string;
}

export default function NavItem({ href, name }: NavItemProps) {
    return (
        <Link href={href} className={style.navigation_item}>
            <Package className={style.navigation_icon}/>
            <strong className={style.navigation_name}>
                <span>{ name }</span>
            </strong>
        </Link>
    );
}