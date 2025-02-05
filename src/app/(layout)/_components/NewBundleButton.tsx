'use client'

import { MouseEvent, useState } from 'react';
import style from './NewBundleButton.module.css';
import NewBundleModal from './NewBundleModal';

export default function NewBundleButton() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onClick = (e: MouseEvent) => {
        setIsModalOpen(!isModalOpen);
    }

    const close = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <button className={style.new_bundle_btn} onClick={onClick}>
                <span className={style.new_bundle_btn_text}>새로운 꾸러미 생성</span>
            </button>
            <NewBundleModal visible={isModalOpen} close={close}/>
        </>
    )
}