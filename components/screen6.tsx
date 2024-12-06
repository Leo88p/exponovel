import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'

const background = require('@/assets/images/background-7.png')

export default function Screen5() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[6])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Повернуть налево' 
              next={()=>{dispatch(visit(6)); dispatch(set(7))}}/>
              <Option text='Вернуться назад' 
              next={()=>{dispatch(visit(6)); dispatch(set(1))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {visited==0&&<Text style={styles.text}>
            Ты продолжил идти по коридору пока не упёрся в запертую дверь. Она слишком массивная, чтобы пытаться её выломать, так что, если ты хочешь пройти дальше, тебе придётся найти способ открыть её.
        </Text>}
        {visited==1&&<Text style={styles.text}>
           Ты вернулся к запертой двери.
        </Text>}
      </View>
    </ImageBackground>
  );
  }