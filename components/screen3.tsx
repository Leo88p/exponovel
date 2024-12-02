import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { visit } from '@/slices/visitedSlice'

const background = require('@/assets/images/background-4.png')

export default function Screen3() {
  const dispatch = useAppDispatch()
  const visited = useAppSelector((state) => state.visited.visited[3])
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Вернуться назад' 
              next={()=>{dispatch(visit(3)); return dispatch(set(2))}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {visited==0&&<Text style={styles.text}>
            Спустившись вниз, ты обнаруживаешь источник аномального тепла. Пещера перед тобой залита лавой, и исходящий от неё жар не позволяет тебе приблизиться. Тебе остаётся только вернуться назад.
        </Text>}
        {visited==1&&<Text style={styles.text}>
          Ты вернулся к лавовой пещере.
        </Text>}
      </View>
    </ImageBackground>
  );
}