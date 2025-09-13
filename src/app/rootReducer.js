import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "@features/ui/slice/uiSlice";
import citizensReducer from "@features/citizens/slice/citizenSlice";

export const rootReducer = combineReducers({
    ui: uiReducer,
    citizens: citizensReducer
})