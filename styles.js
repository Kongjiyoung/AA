import { StyleSheet,Platform } from 'react-native';

export default StyleSheet.create(
  {
    container1: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    pinkbaby: {
      padding :5 ,
      height:'100%',
      width:'100%',
      backgroundColor:'pink',
    },
    elem: {
      flex : 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      //borderColor:'#eee',
      //borderBottomWidth:1,
      padding: 5,
  },
  elemline: {
      flex : 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderColor:'#eee',
      borderBottomWidth:1,
      padding: 5,
  },
   whitebaby:
   {
      borderRadius:5,
      padding :5 ,
      backgroundColor:'white',
      justifyContent: "center",
      alignItems: "center",
    },
    timeText:
    {
      fontSize: 25,
      color: '#2196f3',
    },
    loadingbackground: {
      flex :1,
      justifyContent: "flex-end",
      backgroundColor:'pink',
      paddingLeft:25
    },
    loadingText: {
      fontSize : 30,
      color : 'white',
      marginBottom : 100
    },
    errorText : {
      color : "red",
      backgroundColor : "transparent!",
      marginBottom : 40
    },
     container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  containerbutton: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
});
