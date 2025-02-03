import style from './SideBar.module.css';
import NavItem from './NavItem';
import NewBundleButton from './NewBundleButton';
import { cookies } from 'next/headers';
import { fetchProfile } from '@/api/service/profile';

export default async function Sidebar() {
    const cookieStore = await cookies();

    let isLogined = false;

    if (cookieStore.get('access_token'))
        isLogined = true;

    const data = await fetchProfile('repic');

    return (
        <>
        {isLogined && <aside className={style.side_bar}>
                <nav className={style.navigation}>
                    <div className={style.navigation_title}>
                        내 꾸러미
                    </div>
                    <div className={style.navigation_list}>
                        {data.bundleList.map(({ title, id }, i) => 
                            <NavItem key={i} href={`/bundle/${id}`} name={title} />
                        )}
                        <NewBundleButton />
                    </div>
                </nav>
        </aside>}
        </>
    );
}

