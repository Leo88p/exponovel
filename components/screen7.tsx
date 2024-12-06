import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { take } from '@/slices/itemsSlice';
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'
import { todo, undo } from '@/slices/actionSlice'

const background = require('@/assets/images/background-8.png')

export default function Screen7() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[7])
  const haveBucket = useAppSelector((state) => state.items.bucket)
  const tookBucket = useAppSelector((state) => state.action.takeBucket)
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              {haveBucket==0&&<Option text='Взять ведро' 
              next={()=>{dispatch(todo('takeBucket')); return dispatch(take('bucket'))}}/>}
              <Option text='Вернуться назад' 
              next={()=>{dispatch(undo('takeBucket')); dispatch(visit(7)); return dispatch(set(6))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {tookBucket==0&&visited==0&&<Text style={styles.text}>
            Пройдя налево, ты заходишь в небольшую кладовку. Внутри ты видишь обилие корзин, а также небольшое ведро.
        </Text>}
        {tookBucket==0&&visited==1&&<Text style={styles.text}>
          Ты вернулся в кладовку.
        </Text>}
        {tookBucket==1&&<Text style={styles.text}>
          Ты берёшь ведро с собой.
        </Text>}
      </View>
    </ImageBackground>
  );
}