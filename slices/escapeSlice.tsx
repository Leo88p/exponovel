import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const escapeSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      escape: (state, action) => {
        state.value = action.payload
      },
    },
  })

export const { escape } = escapeSlice.actions;

export default escapeSlice.reducer;