import { Package } from "lucide-react";
import Link from "next/link";
import styles from './BundleSection.module.css';
import { Bundle } from "@/api/types";

interface Props {
    bundleList: Bundle[];
}

export default function BundleSection({ bundleList }: Props) {
    return (
        <div className={styles.bundleSection}>
                <h2 className={styles.bundleTitle}>음악 꾸러미</h2>
                <div className={styles.bundleGrid}>
                    {bundleList.map((bundle, index) => (
                        <Link key={index} className={styles.bundleItem} href={`/bundle/${bundle.id}`}>
                            <Package className={styles.bundleIcon} size={32}/>
                            <span className={styles.bundleName}>{ bundle.title }</span>
                        </Link>
                    ))}
                </div>
        </div>
    );
}