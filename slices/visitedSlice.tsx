import { createSlice } from '@reduxjs/toolkit';
import screens from '@/assets/scenes.json'

const initialState = {
  visited: new Array(screens.length).fill(0),
}

export const visitedSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      visit: (state, action) => {
        state.visited[action.payload] = 1
      },
    },
  })

export const { visit } = visitedSlice.actions;

export default visitedSlice.reducer;