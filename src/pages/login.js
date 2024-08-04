import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../components/Login.module.css';
import Loading from '../../components/loginloading.module.css';
import ThemeWrapper from "../../components/ThemeWrapper";

export default function Login() {

    useEffect(() => {
    // 禁用滚动条
    document.body.style.overflow = 'hidden';

    // 清理函数以恢复滚动条
    return () => {
      document.body.style.overflow = 'auto';
    };
    }, []);

    const router = useRouter();

    const handleLogin = () => {
        router.push('/api/auth/initiate');
    };

    useEffect(() => {
        document.body.style.margin = 0;
      }, []);

    return (
        <div className={styles.container}>
             <Head>
                <title>Verify With Linux Do</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className={styles.card}>
                <Image src='/linuxdo_logo_with_light_text.png' width={180} height={60} alt="LinuxDo Logo" style={{filter: 'drop-shadow(2px 2px 2px rgba(27, 26, 30,0.4))'}} />
                <h1 className={styles.title}>Verify With Linux Do</h1>
                <p className={styles.description}>为保护社区用户权益，请验证后访问 Wiki 文档！</p>
                <br></br>
                <br></br>
                <section class={Loading.dotsContainer}>
                    <div class={Loading.dot}></div>
                    <div class={Loading.dot}></div>
                    <div class={Loading.dot}></div>
                    <div class={Loading.dot}></div>
                    <div class={Loading.dot}></div>
                </section>
                <br></br>
                <br></br>
                <button className={styles.button} onClick={handleLogin}>验证身份</button>
            </div>
        </div>
    );
}