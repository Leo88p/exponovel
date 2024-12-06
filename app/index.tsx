import { store, useAppSelector } from '@/store'
import { Provider } from 'react-redux'

import Screen0 from "@/components/screen0"
import Screen1 from "@/components/screen1"
import Screen2 from "@/components/screen2"
import Screen3 from "@/components/screen3"
import Screen4 from "@/components/screen4"
import Screen5 from "@/components/screen5"
import Screen6 from "@/components/screen6"
import Screen7 from "@/components/screen7"
import Screen8 from "@/components/screen8"

function Scene() {
  const scene = useAppSelector((state) => state.scene.value)
  const screens = [<Screen0 />,
    <Screen1/>,
    <Screen2/>,
    <Screen3/>,
    <Screen4/>,
    <Screen5/>,
    <Screen6/>,
    <Screen7/>,
    <Screen8/>,
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