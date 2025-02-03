import styles from './styles.module.css';

export default function LoginLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={styles.login_layout}>
            { children }
        </div>
    );
}