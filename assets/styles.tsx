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
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      padding: 10,
    },
    text: {
      fontSize: Dimensions.get("window").height/27,
      color: 'white',
    },
    right: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: Dimensions.get("window").width/4,
      marginLeft: 'auto',
    },
    scroll: {
      marginBottom: 'auto',
    },
    end: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
    },
    finalText: {
      color: 'white',
      fontSize: Dimensions.get("window").height/10,
      textAlign: 'center'
    }
  });