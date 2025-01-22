import Image from "next/image";
import styles from './Profile.module.css';

interface Props {
    profile: string;
    name: string;
    description: string;
}

export default function Profile({ profile, name, description }: Props) {
    return (
        <div className={styles.profile}>
            <Image src={profile} alt={`${name}의 프로필`} className={styles.profileImage} width={120} height={120} />
            <h1 className={styles.userName}>{name}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    );
}