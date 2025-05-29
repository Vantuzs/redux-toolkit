import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`,()=>{
    return API.getUsers();
});
// users/getUsers/fulfilled
// users/getUsers/panding
// users/getUsers/rejected

const initialState = {
    users: [],
    isLoading: true,
    error: null
}

const usersSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        getUsers: (state,action) => {
            // API.getUsers()
        }
    },
    extraReducers: {
        [getUsers.pending]: (state,action) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state,action) =>{
            state.users = action.payload;
            state.isLoading = false;
        },
        [getUsers.rejected]: (state,action) =>{
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

// export createAsycncThunk result
export {getUsers};

export default usersSlice.reducer;