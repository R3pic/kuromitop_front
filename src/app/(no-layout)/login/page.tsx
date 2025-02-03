'use client'

import { loginAction } from '@/actions/login';
import styles from './styles.module.css';
import { useActionState, useState } from 'react';

export default function LoginPage() {
    const actionResult = {
        message: undefined,
        errors: {
            username: undefined,
            password: undefined,
        }
    };
    
    const [state, formAction, pending] = useActionState(loginAction, actionResult)
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className={styles.formbox}>
            <form action={formAction}>
                <h1 className={styles.login_title}>꾸러미탑</h1>

                <div className={styles.loginbox}>
                    <label htmlFor='username'>아이디</label>
                    <input
                        id='username'
                        className={styles.input}
                        type='text'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p>{state.errors?.username}</p>
                    <label htmlFor='password'>비밀번호</label>
                    <input
                        id='password'
                        className={styles.input}
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{state.errors?.password}</p>
                </div>
                
                <footer>
                    <button
                        className={styles.loginBtn}
                        type='submit'
                        disabled={pending}
                        name='로그인'
                    >로그인</button>
                    <p aria-live="polite">{state?.message}</p>
                </footer>
            </form>
        </div>
    );
}