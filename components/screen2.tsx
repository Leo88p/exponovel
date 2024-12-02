import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'

const background = require('@/assets/images/background-3.png')

export default function Screen2() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[2])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Подняться вверх' 
              next={()=>{dispatch(visit(2)); return dispatch(set(2))}}/>
              <Option text='Спуститься вниз' 
              next={()=>{dispatch(visit(2)); return dispatch(set(3))}}/>
              <Option text='Вернуться назад' 
              next={()=>{dispatch(visit(2)); return dispatch(set(1))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {visited==0&&<Text style={styles.text}>
          Ты повернул налево. Чем дальше ты проходишь по коридору, тем теплее становится воздух, и ты начинаешь сомневаться, стоит и тебе продолжать путь дальше. Однако, вскоре ты доходишь до лестницы, по которой ты можешь спуститься вниз, где воздух ещё более раскалён, или вверх, где ощущается прохлада.
        </Text>}
        {visited==1&&<Text style={styles.text}>
          Ты вернулся в коридор с тёплым воздухом.
        </Text>}
      </View>
    </ImageBackground>
  );
  }