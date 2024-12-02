import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visited: [0, 0, 0],
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