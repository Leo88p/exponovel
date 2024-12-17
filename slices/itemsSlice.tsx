import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  knife: 0,
  escape: 0,
  bucket: 0,
  mousePelt: 0,
  leaf: 0,
  blood: 0,
  end: 0,
}

export const itemsSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      take: (state, action) => {
        state[action.payload as keyof typeof state] = 1
      },
      use: (state, action) => {
        state[action.payload as keyof typeof state] = 2
      }
    },
  })

export const { take, use } = itemsSlice.actions;

export default itemsSlice.reducer;