import { store, useAppSelector } from '@/store'
import { Provider } from 'react-redux'

import Screen from "@/components/screen"

function Scene() {
  return (
    <Screen/>
  );
}
export default function Index() {
  return (
    <Provider store={store}>
      {<Scene/>}
    </Provider>
  );
}