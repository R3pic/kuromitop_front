'use client'

import { MouseEvent, useActionState, useState } from 'react';
import styles from './NewBundleModal.module.css';
import { createBundleAction } from '@/actions/create-bundle';

interface Props {
    visible: boolean;
    close: () => void;
}

export default function NewBundleModal({ visible, close }: Props) {
    const actionResult = {
        message: undefined,
        errors: {
            title: undefined,
            is_private: undefined,
        }
    };

    const [state, formAction, pending] = useActionState(createBundleAction, actionResult);
    const [title, setTitle] = useState<string>('');

    const onOverlayClick = (e: MouseEvent) => {
        if (e.target === e.currentTarget)
            close();
    }

    return (
        <div className={`${styles.modal_overlay} ${visible ? `${styles.show}` : ''}`} onClick={onOverlayClick}>
            <div className={styles.modal_box} >
                <form className={styles.new_bundle_form} action={formAction}>
                    <h2>새로운 꾸러미 생성</h2>
                    <label className={styles.input_label}>꾸러미 이름</label>
                    <input
                        id='title'
                        className={styles.bundle_name_input}
                        name='title'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p>{state.errors?.title}</p>
                    <label className={styles.input_label}>공개 여부</label>
                    <input
                        id='isprivate'
                        className={styles.bundle_visible_check_box}
                        name='isprivate'
                        type='checkbox'
                        value={'isprivate'}
                    />
                    <p>{state.errors?.is_private}</p>
                    <button
                        className={styles.new_bundle_accept_btn}
                        type='submit'
                        disabled={pending}
                        name='확인'
                    >확인</button>
                    <p aria-live="polite">{state?.message}</p>
                </form>
            </div>
        </div>
    );
}