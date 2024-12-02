import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch } from '@/store'
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'

const background = require('@/assets/images/background-1.png')

export default function Screen0() {
  const dispatch = useAppDispatch()
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Сделать глубокий вдох и войти в подземелье' 
              next={()=>{dispatch(visit(0)); return dispatch(set(1))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>
          Дождавшись рассвета солнца, ты подходишь к величественным руинам. Ты пытаешься насладиться запахом утренней свежести, однако исходящие от руин мощные потоки энергии заставляют тебя нервничать. Но для тебя нет пути назад - в подземелье находится легендарный Веер Ветров, и твоя задача - добыть его.
        </Text>
      </View>
    </ImageBackground>
  );
  }