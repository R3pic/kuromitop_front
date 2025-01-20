import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>메인입니다.</p>
      </main>
    </div>
  );
}
