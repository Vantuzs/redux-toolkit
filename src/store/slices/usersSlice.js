import { createSlice } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const initialState = {
    users: [],
    isLoading: true,
    error: null
}

createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        getUsers: (state,action) => {
            // API.getUsers()
        }
    }
})