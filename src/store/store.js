import { configureStore } from "@reduxjs/toolkit";

import counterReducer, {increment,decrement} from "./slices/counterSlice";

const store = configureStore({
    reducer: counterReducer
});

export default store;