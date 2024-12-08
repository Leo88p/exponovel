import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import sceneReducer from '@/slices/sceneSlice'
import actionReducer from '@/slices/actionSlice'
import visitedReducer from '@/slices/visitedSlice'
import itemsReducer from '@/slices/itemsSlice'

export const store = configureStore({
  reducer: {
    scene: sceneReducer,
    actions: actionReducer,
    visited: visitedReducer,
    items: itemsReducer
  },
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()