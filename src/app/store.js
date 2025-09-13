import { rootReducer } from "@/app/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer
})