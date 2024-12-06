import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attemptEscape: 0,
  takeKnife: 0,
  teleportFromAngel: 0,
  throwKnife: 0,
  takeBucket: 0,
  takeIce: 0,
}

export const actionSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      todo: (state, action) => {
        switch (action.payload) {
          case 'attemptEscape': 
            state.attemptEscape = 1
            break
          case 'takeKnife':
            state.takeKnife = 1
            break
          case 'teleportFromAngel':
            state.teleportFromAngel = 1
            break
          case 'throwKnife':
            state.throwKnife = 1
            break
          case 'takeBucket':
            state.takeBucket = 1
            break
          case 'takeIce':
            state.takeIce = 1
            break
        }
      },
      undo: (state, action) => {
        switch (action.payload) {
          case 'attemptEscape': 
            state.attemptEscape = 0
            break
          case 'takeKnife':
            state.takeKnife = 0
            break
          case 'teleportFromAngel':
            state.teleportFromAngel = 0
            break
          case 'throwKnife':
            state.throwKnife = 0
            break
          case 'takeBucket':
            state.takeBucket = 0
            break
          case 'takeIce':
            state.takeIce = 0
            break
        }
      },
    },
  })

export const { todo, undo } = actionSlice.actions;

export default actionSlice.reducer;