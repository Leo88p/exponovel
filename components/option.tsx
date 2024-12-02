import {useState} from "react"
import {StyleSheet, Dimensions, Pressable, Text} from "react-native";

export default function Option({text, next}:{text: string, next: Function}) {
    const [hover, setHover] = useState('white')
    const styles = StyleSheet.create({
        option: {
            color: hover,
            fontSize: Dimensions.get("window").height/27,
            padding: 10,
          },
    })
    return (
        <Pressable onHoverIn={()=>{setHover('yellow')}} onHoverOut={()=>{setHover('white')}} onPressIn={()=>{next()}}>
            <Text style={styles.option}>
                ● {text}
            </Text>
        </Pressable>
    )
}