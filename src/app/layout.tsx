import type { Metadata } from "next";
import "./globals.css";
import styles from './styles.module.css';
import localFont from 'next/font/local';
import Header from "./_components/Header";
import Sidebar from "./_components/SideBar";

const paperlogy = localFont({
  src:  "../../public/fonts/Paperlogy-4Regular.woff2",
  display: 'swap'      
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const paperlogy_bold = localFont({
  src:  "../../public/fonts/Paperlogy-8ExtraBold.woff2",
  display: 'swap' 
})

export const metadata: Metadata = {
  title: "꾸러미탑",
  description: "당신의 음악을 꾸러미에 담아보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={paperlogy.className}>
      <body>
        <Header/>
        <section className={styles.content_section}>
          <Sidebar/>
          <main>
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
