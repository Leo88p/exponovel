import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { use } from '@/slices/itemsSlice';
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'
import { todo, undo } from '@/slices/actionSlice'

const background = require('@/assets/images/background-9.png')

export default function Screen8() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[8])
  const haveBucket = useAppSelector((state) => state.items.bucket)
  const tookIce = useAppSelector((state) => state.action.takeIce)
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              {haveBucket==1&&<Option text='Взять лёд' 
              next={()=>{dispatch(todo('takeIce')); return dispatch(use('bucket'))}}/>}
              <Option text='Вернуться назад' 
              next={()=>{dispatch(undo('takeIce')); dispatch(visit(8)); return dispatch(set(1))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {tookIce==0&&visited==0&&<Text style={styles.text}>
          Ты повернул направо. С каждым твоим шагом воздух становится холоднее, и вскоре ты обнаруживаешь обширный зал, полностью покрытый льдом. Холод невыносим, и ты не можешь пройти дальше без риска обморожения.
        </Text>}
        {tookIce==0&&visited==1&&<Text style={styles.text}>
          Ты вернулся в ледяной зал.
        </Text>}
        {tookIce==1&&<Text style={styles.text}>
          Ты решаешь положить лёд в ведро. Он растает, когда ты уйдёшь из ледяного зала, но вода может пригодиться. 
        </Text>}
      </View>
    </ImageBackground>
  );
}