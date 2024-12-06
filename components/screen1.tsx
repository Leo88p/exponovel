import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { todo, undo } from '@/slices/actionSlice'
import { visit } from '@/slices/visitedSlice'
import { take } from '@/slices/itemsSlice';

const background = require('@/assets/images/background-2.png')

export default function Screen1() {
  const dispatch = useAppDispatch()
  const escapeAttempt = useAppSelector((state) => state.items.escape)
  const resentlyTriedEscape = useAppSelector((state) => state.action.attemptEscape)
  const teleported = useAppSelector((state) => state.action.teleportFromAngel)
  const visited = useAppSelector((state) => state.visited.visited[1])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Пойти по тёплому коридору слева' 
              next={()=>{dispatch(undo('teleportFromAngel')); dispatch(undo('attemptEscape')); dispatch(visit(1)); return dispatch(set(2))}}/>
              <Option text='Пойти по коридору в центре' 
              next={()=>{dispatch(undo('teleportFromAngel')); dispatch(undo('attemptEscape')); dispatch(visit(1)); return dispatch(set(6))}}/>
              <Option text='Пойти по холодному коридору справа' 
              next={()=>{dispatch(undo('teleportFromAngel')); dispatch(undo('attemptEscape')); dispatch(visit(1)); return dispatch(set(8))}}/>
              {escapeAttempt==0&&<Option text='Вернуться назад' 
              next={()=>{dispatch(undo('teleportFromAngel')); dispatch(take('escape')); return dispatch(todo('attemptEscape'))}}/>}
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {teleported==0&&resentlyTriedEscape!=1&&visited==0&&<Text style={styles.text}>
            Пройдя по узкому коридору, ты обнаруживаешь просторный зал. Воздух внутри тяжёлый, и древняя магия данного места полностью окутывает тебя. Из зала выходит три коридора, и тебе предстоит выбрать, по какому из них идти.
        </Text>}
        {teleported==0&&resentlyTriedEscape!=1&&visited==1&&<Text style={styles.text}>
          Поднявшись по коридору, ты вернулся в знакомый зал в начале лабиринта.
        </Text>}
        {teleported==0&&resentlyTriedEscape==1&&<Text style={styles.text}>
          Испугавшись напряжённой атмосферы данного места, ты предпринимаешь попытку бросить всё и вернуться назад. Однако, стоило тебе обернуться, как входные двери намертво захлопнулись. Знакомый путь назад отрезан, и тебе придётся найти новый выход из лабиринта.
        </Text>}
        {teleported==1&&<Text style={styles.text}>
          Прикоснувшись к статуе, ты увидел яркий белый свет, а затем очнулся в зале у входа в подземелье.
        </Text>}
      </View>
    </ImageBackground>
  );
  }