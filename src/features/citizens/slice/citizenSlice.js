import { generateCitizensFull } from "@/data/generator";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    citizens: generateCitizensFull(10000),
    page: 0,
    pageSize: 100
}

const citizensSlice = createSlice({
    name: 'citizens',
    initialState,
    reducers:{
        setSitizens: (state, {payload}) => {
            state.citizens = payload
        },
        setPage: (state, {payload}) => {
            state.page = payload
        },
        setPageSize: (state, {payload}) => {
            state.pageSize = payload
        }
    }
})

export const selectedPageCitizens = (state) => {
    const {citizens, page, pageSize} = state.citizens;
    const start = page * pageSize;
    return citizens.slise(start, start + pageSize)
}

export const selectTotalCitizens = (state) => state.citizens.citizens.length;
export const SelectPage = (state) => state.citizens.page;
export const SelectPageSize = (state) => state.citizens.pageSize;

export default citizensSlice.reducer;