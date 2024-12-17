import { store, useAppSelector } from '@/store'
import { Provider } from 'react-redux'
import React from 'react'
import Screen from "@/components/screen"
import EndScreen from "@/components/endScreen"

function Scene() {
  const end = useAppSelector((state) => state.items.end)
  return (
    <>
        {end==0&&<Screen/>}
        {end==1&&<EndScreen/>}
    </>
  );
}
export default function Index() {
  return (
    <Provider store={store}>
      {<Scene/>}
    </Provider>
  );
}