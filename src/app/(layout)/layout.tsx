import Header from "./_components/Header";
import Sidebar from "./_components/SideBar";
import styles from './styles.module.css';

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <Header/>
        <section className={styles.content_section}>
          <Sidebar/>
          <main>
            { children }
          </main>
        </section>
        </>
        
    );
}