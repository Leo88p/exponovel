import Screen0 from "@/components/screen0"
import Screen1 from "@/components/screen1"
import Screen2 from "@/components/screen2"
import {useState} from "react"

export default function Index() {
  const [scene, setScene] = useState(0)
  const screens = [<Screen0 setScene={setScene}/>,
    <Screen1 setScene={setScene}/>,
    <Screen2 setScene={setScene}/>
  ]
  return (
    <>
      {screens[scene]}
    </>
  );
}