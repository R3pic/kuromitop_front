import style from './SideBar.module.css';
import NavItem from './NavItem';
import NewBundleButton from './NewBundleButton';

export default function Sidebar() {
    const mocks = [
        { name: "꾸러미 이름1", href: '/bundle/1' },
        { name: "꾸러미 이름2", href: '/bundle/2' },
        { name: "꾸러미 이름3", href: '/bundle/3' }
    ]

    return (
        <aside className={style.side_bar}>
            <nav className={style.navigation}>
                <div className={style.navigation_title}>
                    내 꾸러미
                </div>
                <div className={style.navigation_list}>
                    {mocks.map(({ name, href }, i) => 
                        <NavItem key={i} href={href}name={name} />
                    )}
                    <NewBundleButton />
                </div>
            </nav>
        </aside>
    );
}

