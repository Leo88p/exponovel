import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'
import { todo } from '@/slices/actionSlice'

const background = require('@/assets/images/background-6.png')

export default function Screen5() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[5])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Прикоснуться к статуе' 
              next={()=>{dispatch(todo('teleportFromAngel')); dispatch(visit(5)); dispatch(set(1))}}/>
              <Option text='Вернуться назад' 
              next={()=>{dispatch(visit(5)); dispatch(set(4))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {visited==0&&<Text style={styles.text}>
            Пройдя в следующую комнату, ты видишь там величественную статую ангела. Ты чувствуешь исходящие от неё потоки магии, и тебе приятно от этого ощущения. Ты хочешь прикоснуться к статуе, но твой рассудок подсказывает не притрагиваться к незнакомым магическим объектам.
        </Text>}
        {visited==1&&<Text style={styles.text}>
           Ты вернулся к статуе ангела.
        </Text>}
      </View>
    </ImageBackground>
  );
  }