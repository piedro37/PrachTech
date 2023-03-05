import { combineReducers, configureStore } from '@reduxjs/toolkit'
import generalReducer from './lib/slices/generalSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'; //needed for redux-persist

const reducers = combineReducers({
  general: generalReducer, 
})

//opgelet, rename key na wijzigingen aan reducers
const persistConfig = {
  key: 'prachtech',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export default configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk],
})


// export default configureStore({
//   reducer: {
//     general: generalReducer,
//   },
//   devTools: true,
// })