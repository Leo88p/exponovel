import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";

const background = require('@/assets/images/background-3.png')

export default function Screen2({setScene}:{setScene: Function}) {
  return (
    <ImageBackground source={background} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
            <ScrollView style={styles.scroll}>
              <Option text='Подняться вверх' 
              next={()=>{setScene(2)}}/>
              <Option text='Спуститься вниз' 
              next={()=>{setScene(2)}}/>
              <Option text='Вернуться назад' 
              next={()=>{setScene(1)}}/>
            </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>
          Ты повернул налево. Чем дальше ты проходишь по коридору, тем теплее становится воздух, и ты начинаешь сомневаться, стоит и тебе продолжать путь дальше. Однако, вскоре ты доходишь до лестницы, по которой ты можешь спуститься вниз, где воздух ещё более раскалён, или вверх, где ощущается прохлада.
        </Text>
      </View>
    </ImageBackground>
  );
  }