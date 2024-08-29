import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import enterUriReducer from './slice/enterUriSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const store = configureStore({
    reducer: {
        enterUri: persistReducer(persistConfig, enterUriReducer),
    },
});

const persistor = persistStore(store);

export { store, persistor };
