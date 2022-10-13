import { configureStore } from '@reduxjs/toolkit'
//apis
import tShirt from './actions/tShirtAPI'
//reducers

// Persist 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Persist Cart
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, CartReducer)

// Persist User
const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['isLoggingIn']
}
const persitedUSer = persistReducer(authPersistConfig, UserStatus)

const store = configureStore({
    reducer: {

        [tShirt.reducerPath]: tShirt.reducer,

        user: persitedUSer,
        cart: persistedReducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat()

})



export default store