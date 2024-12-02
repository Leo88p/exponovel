import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { escape } from '@/slices/escapeSlice'
import { visit } from '@/slices/visitedSlice'

const background = require('@/assets/images/background-2.png')

export default function Screen1() {
  const dispatch = useAppDispatch()
  const escapeAttempt = useAppSelector((state) => state.escape.value)
  const visited = useAppSelector((state) => state.visited.visited[1])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Пойти по тёплому коридору слева' 
              next={()=>{if(escapeAttempt==1) dispatch(escape(2)); dispatch(visit(1)); return dispatch(set(2))}}/>
              <Option text='Пойти по коридору в центре' 
              next={()=>{if(escapeAttempt==1) dispatch(escape(2)); dispatch(visit(1)); return dispatch(set(1))}}/>
              <Option text='Пойти по холодному коридору справа' 
              next={()=>{if(escapeAttempt==1) dispatch(escape(2)); dispatch(visit(1)); return dispatch(set(1))}}/>
              {escapeAttempt==0&&<Option text='Вернуться назад' 
              next={()=>{dispatch(escape(1))}}/>}
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {escapeAttempt!=1&&visited==0&&<Text style={styles.text}>
            Пройдя по узкому коридору, ты обнаруживаешь просторный зал. Воздух внутри тяжёлый, и древняя магия данного места полностью окутывает тебя. Из зала выходит три коридора, и тебе предстоит выбрать, по какому из них идти.
        </Text>}
        {escapeAttempt!=1&&visited==1&&<Text style={styles.text}>
          Поднявшись по коридору, ты вернулся в знакомый зал в начале лабиринта.
        </Text>}
        {escapeAttempt==1&&<Text style={styles.text}>
          Испугавшись напряжённой атмосферы данного места, ты предпринимаешь попытку бросить всё и вернуться назад. Однако, стоило тебе обернуться, как входные двери намертво захлопнулись. Знакомый путь назад отрезан, и тебе придётся найти новый выход из лабиринта.
        </Text>}
      </View>
    </ImageBackground>
  );
  }