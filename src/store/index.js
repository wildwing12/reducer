import {configureStore} from "@reduxjs/toolkit";
import test from './tset'

export const store = configureStore({
    reducer: {
        test,
    },
})