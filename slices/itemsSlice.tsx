import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  knife: 0,
  escape: 0,
  bucket: 0,
}

export const itemsSlice = createSlice({
    name: 'scene',
    initialState: initialState,
    reducers: {
      take: (state, action) => {
        switch (action.payload) {
            case 'knife':
                state.knife = 1
                break
            case 'escape':
                state.escape = 1
                break
            case 'bucket':
              state.bucket = 1
              break
        }
      },
      use: (state, action) => {
        switch (action.payload) {
          case 'knife':
              state.knife = 2
              break
          case 'bucket':
             state.bucket = 2
        }
      }
    },
  })

export const { take, use } = itemsSlice.actions;

export default itemsSlice.reducer;