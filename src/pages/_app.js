import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = Cookie.get('user');
        if (!user && router.pathname !== '/login') {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router.pathname]);

    if (!isAuthenticated && router.pathname !== '/login') {
        return null;
    }

    return <Component {...pageProps} />;
}

export default MyApp;