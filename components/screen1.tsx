import { Text, View, ImageBackground, ScrollView } from "react-native";
import { useState } from "react"
import styles from "@/assets/styles";
import Option from "@/components/option";

const background = require('@/assets/images/background-2.png')

export default function Screen1({setScene}:{setScene: Function}) {
  const [attemptedEscape, setAttemptedEscape] = useState(false)
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Пойти по тёплому коридору слева' 
              next={()=>{setScene(2)}}/>
              <Option text='Пойти по коридору в центре' 
              next={()=>{setScene(1)}}/>
              <Option text='Пойти по холодному коридору справа' 
              next={()=>{setScene(1)}}/>
              {!attemptedEscape&&<Option text='Вернуться назад' 
              next={()=>{setAttemptedEscape(true)}}/>}
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {!attemptedEscape&&<Text style={styles.text}>
            Пройдя по узкому коридору, ты обнаруживаешь просторный зал. Воздух внутри тяжёлый, и древняя магия данного места полностью окутывает тебя. Из зала выходит три коридора, и тебе предстоит выбрать, по какому из них идти.
        </Text>}
        {attemptedEscape&&<Text style={styles.text}>
          Испугавшись напряжённой атмосферы данного места, ты предпринимаешь попытку бросить всё и вернуться назад. Однако, стоило тебе обернуться, как входные двери намертво захлопнулись. Знакомый путь назад отрезан, и тебе придётся найти новый выход из лабиринта.
        </Text>}
      </View>
    </ImageBackground>
  );
  }