import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//as we are using typescript we need to exprt these types to use in entire application