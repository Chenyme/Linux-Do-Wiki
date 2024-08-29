import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store, persistor} from "../../service/storage/store";
import {clear, set} from "../../service/storage/slice/enterUriSlice";
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = store.dispatch;
    const enterUri = store.getState().enterUri.value;

    useEffect(() => {
        const user = Cookie.get('user');
        if (user) {
            setIsAuthenticated(true);
            if (router.pathname === '/') {
                dispatch(clear);
                router.push(enterUri);
            }
        } else {
            if (router.pathname !== '/login' && router.pathname !== '/api/auth/initiate' && router.pathname !== '/api/auth/callback') {
                dispatch(set(router.asPath));
                router.push('/login');
            }
        }
    }, [router.pathname]);

    if (!isAuthenticated && router.pathname !== '/login') {
        return null;
    }

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;