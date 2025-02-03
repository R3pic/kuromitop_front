'use client';

import { Plus } from 'lucide-react';
import styles from './NewMusicButton.module.css';
import { MouseEvent } from 'react';

export default function NewMusicButton() {
    const Click = (e: MouseEvent) => {
        console.log('음악 추가 버튼 클릭', e);
    }

    return (
        <button className={styles.newMusicButton} onClick={Click}>
            <p className={styles.buttonText}>음악 추가</p>
            <Plus size={'1rem'}/>
        </button>
    )
}