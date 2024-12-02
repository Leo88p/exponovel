import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const sceneSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      set: (state, action) => {
        state.value = action.payload
      },
    },
  })

export const { set } = sceneSlice.actions;

export default sceneSlice.reducer;