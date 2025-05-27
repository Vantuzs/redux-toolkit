import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const {LANGUAGE} = CONSTANTS;

const initialState = LANGUAGE.EN_US;

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state,action) => action.payload
    }
});

const {reducer,actions: {setLang}} = langSlice;

export {setLang};
export default reducer;