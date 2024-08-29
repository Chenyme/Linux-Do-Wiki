import { createSlice } from '@reduxjs/toolkit';

const enterUriSlice = createSlice({
    name: 'enterUri',
    initialState: { value: '/change-log' },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        clear: (state) => {
            state.value = '/';
        },
    },
});

export const { set, clear } = enterUriSlice.actions;
export default enterUriSlice.reducer;
