import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import enterUriReducer from './slice/enterUriSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, enterUriReducer);

const store = configureStore({
    reducer: {
        enterUri: persistedReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };
