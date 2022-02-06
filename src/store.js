import {reducer} from './redux/reducer/index'
import { createStore}from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:"cart",
    storage
}
const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,composeWithDevTools())
export const persistor=persistStore(store)
