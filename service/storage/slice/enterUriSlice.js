import { createSlice } from '@reduxjs/toolkit';

const enterUriSlice = createSlice({
    name: 'enterUri',
    initialState: { value: '/change-log' },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set } = enterUriSlice.actions;
export default enterUriSlice.reducer;
