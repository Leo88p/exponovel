import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { use } from '@/slices/itemsSlice';
import { visit } from '@/slices/visitedSlice'
import { todo, undo } from '@/slices/actionSlice'

const background = require('@/assets/images/background-4.png')

export default function Screen3() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[3])
  const haveKnife = useAppSelector((state) => state.items.knife)
  const throwKnife = useAppSelector((state) => state.action.throwKnife)
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              {haveKnife==1&&<Option text='Выбросить нож в лаву' 
              next={()=>{dispatch(todo('throwKnife')); dispatch(use('knife'))}}/>}
              <Option text='Вернуться назад' 
              next={()=>{dispatch(undo('throwKnife')); dispatch(visit(3)); dispatch(set(2))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {throwKnife==0&&visited==0&&<Text style={styles.text}>
            Спустившись вниз, ты обнаруживаешь источник аномального тепла. Пещера перед тобой залита лавой, и исходящий от неё жар не позволяет тебе приблизиться. Тебе остаётся только вернуться назад.
        </Text>}
        {throwKnife==0&&visited==1&&<Text style={styles.text}>
          Ты вернулся к лавовой пещере.
        </Text>}
        {throwKnife==1&&<Text style={styles.text}>
          Движимый непонятным импульсом, ты решаешь выбросить нож в лаву и посмотреть, как он расплавится. Кто знает, что ты хотел достичь этим поступком, но теперь тебе придётся жить без ножа.
        </Text>}
      </View>
    </ImageBackground>
  );
}