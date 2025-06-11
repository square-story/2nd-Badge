import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/countSlice'

const store = configureStore({
    reducer: {
        count: counterReducer
    }
})

export default store