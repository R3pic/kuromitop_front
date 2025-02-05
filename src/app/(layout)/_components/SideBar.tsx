import style from './SideBar.module.css';
import NavItem from './NavItem';
import NewBundleButton from './NewBundleButton';
import { cookies } from 'next/headers';
import { Bundle } from '@/app/api/types';

interface SidebarProps {
    bundleList: Bundle[]
}

export default async function Sidebar({ bundleList }: SidebarProps) {
    const cookieStore = await cookies();

    let isLogined = false;

    if (cookieStore.get('access_token'))
        isLogined = true;

    return (
        <>
        {isLogined && <aside className={style.side_bar}>
                <nav className={style.navigation}>
                    <div className={style.navigation_title}>
                        내 꾸러미
                    </div>
                    <div className={style.navigation_list}>
                        {bundleList.length > 0 && bundleList.map(({ title, id }, i) => 
                            <NavItem key={i} href={`/bundle/${id}`} name={title} />
                        )}
                        <NewBundleButton />
                    </div>
                </nav>
        </aside>}
        </>
    );
}

