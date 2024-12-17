import { Text, View} from "react-native";
import styles from "@/assets/styles";

export default function EndScene() {
  return (
    <View style={styles.end}>
        <Text style={styles.finalText}>Игра пройдена</Text>
    </View>
  );
}