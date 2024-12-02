import { store, useAppSelector } from '@/store'
import { Provider } from 'react-redux'

import Screen0 from "@/components/screen0"
import Screen1 from "@/components/screen1"
import Screen2 from "@/components/screen2"
import {useState} from "react"

function Scene() {
  const [sccene, setScene] = useState(0)
  const scene = useAppSelector((state) => state.scene.value)
  const screens = [<Screen0 />,
    <Screen1/>,
    <Screen2/>
  ]
  return (
    <>
      {screens[scene]}
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