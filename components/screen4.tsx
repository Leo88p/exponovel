import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { take } from '@/slices/itemsSlice';
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'
import { todo, undo } from '@/slices/actionSlice'

const background = require('@/assets/images/background-5.png')

export default function Screen4() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[4])
  const haveKnife = useAppSelector((state) => state.items.knife)
  const tookKnife = useAppSelector((state) => state.action.takeKnife)
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              {haveKnife==0&&<Option text='Осмотреть стол' 
              next={()=>{dispatch(todo('takeKnife')); return dispatch(take('knife'))}}/>}
              <Option text='Пройти в следущую комнату' 
              next={()=>{dispatch(undo('takeKnife')); dispatch(visit(4)); return dispatch(set(5))}}/>
              <Option text='Вернуться назад' 
              next={()=>{dispatch(undo('takeKnife')); dispatch(visit(4)); return dispatch(set(2))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {tookKnife==0&&visited==0&&<Text style={styles.text}>
          Пройдя наверх, ты находишь уютный зал. Он не выглядит заброшенным, однако, ты не находишь следов возможного хозяина. Ты решаешь немного отдохнуть, и замечаешь, что время словно застыло в этом месте. Горящий в камине костёр так и продолжает гореть не затухая долгое время, хотя в нормальных обстоятельствах он должен был бы уже истлеть. Тебе пора продолжать путь.
        </Text>}
        {tookKnife==0&&visited==1&&<Text style={styles.text}>
          Ты вернулся в роскошный зал.
        </Text>}
        {tookKnife==1&&<Text style={styles.text}>
        Осмотрев содержимое стола, ты обнаружил нож. Кто знает, что ты можешь встретить в будущем, так что ты решаешь взять его с собой.
        </Text>}
      </View>
    </ImageBackground>
  );
}