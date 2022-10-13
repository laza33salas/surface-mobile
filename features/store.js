import { configureStore } from '@reduxjs/toolkit'
//apis
import tShirt from './actions/tShirtAPI'
//reducers



const store = configureStore({
    reducer: {

        [tShirt.reducerPath]: tShirt.reducer,


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(tShirt.middleware)

})



export default store