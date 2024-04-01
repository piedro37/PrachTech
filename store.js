import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import generalReducer from './lib/slices/generalSlice';

const reducers = combineReducers({
  general: generalReducer,
});

const persistConfig = {
  key: 'prachtech',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: true,
});
