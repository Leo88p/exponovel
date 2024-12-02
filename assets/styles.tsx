import {StyleSheet, Dimensions} from "react-native";
export default StyleSheet.create({
    page: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: '100%',
    },
    top: {
      flex: 4,
    },
    bottom: {
      flex: 1,
      padding: 10,
    },
    text: {
      fontSize: Dimensions.get("window").height/27,
      color: 'white',
      textShadowColor: 'rgb(0, 0, 0)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    right: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: Dimensions.get("window").width/4,
      marginLeft: 'auto',
    },
    scroll: {
      marginBottom: 'auto',
    }
  });