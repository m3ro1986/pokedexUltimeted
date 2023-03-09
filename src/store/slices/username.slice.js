import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
		name: 'username',
    initialState: '',
    reducers: {
        getUsername: ( state, action) => {
            const username = action.payload;
            return username;
        }
    }
})

export const { getUsername } = usernameSlice.actions;

export default usernameSlice.reducer;