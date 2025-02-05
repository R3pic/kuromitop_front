import { fetchMyProfile } from "../api/service/my-bundles";
import Header from "./_components/Header";
import Sidebar from "./_components/SideBar";
import styles from './styles.module.css';

export default async function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const profile = await fetchMyProfile();
    return (
        <>
        <Header 
          nickname={profile.nickname || profile.username}
          id={profile.username}
        />
        <section className={styles.content_section}>
          <Sidebar 
            bundleList={profile.bundleList}
          />
          <main>
            { children }
          </main>
        </section>
        </>
        
    );
}