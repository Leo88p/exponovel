import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attemptEscape: 0,
  takeKnife: 0,
  teleportFromAngel: 0,
  throwKnife: 0,
  takeBucket: 0,
  takeIce: 0,
  extinguishFire: 0,
  cutLeaf: 0
}

export const actionSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      todo: (state, action) => {
        state[action.payload as keyof typeof state] = 1
      },
      undo: (state, action) => {
        state[action.payload as keyof typeof state] = 0
      },
    },
  })

export const { todo, undo } = actionSlice.actions;

export default actionSlice.reducer;