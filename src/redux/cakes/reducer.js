import { createSlice } from "@reduxjs/toolkit";

const cakesSlice = createSlice({
    name: "cakes",
    initialState:{
        currentCake:null
    },
    reducers:{
        setCurrenCake: (state, action)=> {
           state.currentCake = action.payload
        },
        
    }

});

export const {setCurrenCake}=cakesSlice.actions;
export default cakesSlice.reducer;