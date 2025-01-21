'use client'

import { MouseEvent } from 'react';
import style from './NewBundleButton.module.css';

export default function NewBundleButton() {
    const onClick = (e: MouseEvent) => {
        console.log("버튼 클릭", e);
    }

    return (
        <button className={style.new_bundle_btn} onClick={onClick}>
            <span className={style.new_bundle_btn_text}>새로운 꾸러미 생성</span>
        </button>
    )
}