import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: true,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toggleSidebar: (state, {payload}) => {
            state.sidebarOpen = payload;
        }
    }
})

export default uiSlice.reducer;
export const {toggleSidebar} = uiSlice.actions;