import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {value: 0,}
export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {

    }
})
export const {} = testSlice.actions;
export default testSlice.reducer;
