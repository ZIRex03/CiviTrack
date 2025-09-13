import { generateCitizenFull, generateCitizensFull, generateCitizensList } from "@/data/generator";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    citizens: generateCitizensFull(200)
}

const citizensSlice = createSlice({
    name: 'citizens',
    initialState,
    reducers:{
        setSitizens: (state, {payload}) => {
            state.citizens = payload
        }
    }
})

export const {setSitizens} = citizensSlice.actions;
export default citizensSlice.reducer;